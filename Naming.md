# Structuring a Full-Stack React Monorepo: web, admin and api

## 1. Why structure matters

A folder structure decides how quickly someone can find code, how safely it can be changed, and how painful growth becomes. Small apps survive any structure. Larger ones do not. The goal throughout this document is that **a change to one business capability touches one folder**, not ten.

This project has three deliverables:

1. **web**: the customer-facing frontend
2. **admin**: the admin panel (a separate frontend for staff)
3. **api**: the backend that both frontends talk to

Because web and admin are different applications with different audiences, release cycles and access rules, they should not be folders inside one app. They are three apps in one repository (a **monorepo**), sharing code through explicit packages.

---

## 2. Repository layout

```
repo/
├── apps/
│   ├── web/                      # Customer storefront (React)
│   ├── admin/                    # Admin panel (React)
│   └── api/                      # Backend (Node/Bun + Express)
│
├── packages/
│   ├── contracts/                # Shared types + validation schemas (API shapes)
│   ├── ui/                       # Shared UI primitives (button, input, modal...)
│   ├── api-client/               # Typed HTTP client used by web and admin
│   ├── utils/                    # Pure helpers used by more than one app
│   ├── config-typescript/        # Shared tsconfig bases
│   └── config-eslint/            # Shared lint rules
│
├── package.json                  # Root scripts, devDependencies
├── pnpm-workspace.yaml           # Declares the workspace folders
├── turbo.json                    # Task pipeline (build, lint, test) and caching
├── tsconfig.base.json
└── .gitignore
```

```yaml
# pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"
```

An app uses a shared package by declaring it as a workspace dependency:

```json
// apps/web/package.json (excerpt)
{
  "name": "@repo/web",
  "dependencies": {
    "@repo/contracts": "workspace:*",
    "@repo/ui": "workspace:*",
    "@repo/api-client": "workspace:*"
  }
}
```

`@repo` is a placeholder scope. Use your own project name (for example `@byte254/ui`).

Each app has its own `src/` folder. `src` is simply "source", the folder holding the code you write, as opposed to config, lockfiles and build output at the app root.

---

## 3. The main structuring modes (and which we use)

### 3.1 Type-based (layer-based)

Files are grouped by what they are: `components/`, `hooks/`, `services/`. This is easy to understand but scatters one feature across many folders, and a flat `components/` with 80 files becomes undiscoverable. Fine for tutorials, poor for real apps.

### 3.2 Feature-based (domain-based)

Files are grouped by the business capability they serve. Each feature folder is a small module with its own components, hooks, services and state. It gives high cohesion, low coupling, easy deletion and clear ownership. Its cost is that you must decide what is "shared" and keep features from importing each other's internals.

### 3.3 Atomic design

UI organised by granularity (atoms, molecules, organisms). It is a UI composition model, not an application structure. It suits the `packages/ui` library, but says nothing about where API calls or state live.

### 3.4 What we use: hybrid at two levels

- **Between apps:** a monorepo, with shared code in `packages/`.
- **Inside each frontend app:** feature-based for business code, with a few type-based shared folders for genuinely cross-cutting code.
- **Inside the api:** module-based (the backend equivalent of features).

---

## 4. Naming conventions

### The recommendation: kebab-case for files and folders

```
product-card.tsx        use-cart.ts        cart-slice.ts
products-api.ts         format-currency.ts  order-detail.tsx
```

**Why kebab-case wins for file and folder names:**

- **Case-sensitivity bugs.** macOS and Windows file systems are usually case-insensitive, while Linux (your CI server and production containers) is case-sensitive. If a file is `ProductCard.tsx` and someone imports `./productCard`, it works on a laptop and fails in CI. All-lowercase names remove this whole class of bug.
- **Git trouble.** Git on case-insensitive systems often fails to register a rename that only changes capitalisation (`Button.tsx` to `button.tsx`).
- **URL and CLI friendliness.** Kebab-case reads cleanly in terminals, URLs and route folders, and needs no shift key.
- **Ecosystem direction.** Next.js route folders, shadcn/ui, Angular and many large codebases use kebab-case files.

### What goes inside the file keeps its normal casing

Inside the file, naming follows the language, not the file system:

- **React components:** PascalCase. File `product-card.tsx` exports `ProductCard`.
- **Hooks:** camelCase starting with `use`. File `use-cart.ts` exports `useCart`.
- **Functions and variables:** camelCase (`fetchProducts`, `totalPrice`).
- **Types, interfaces, classes:** PascalCase (`Product`, `CartItem`).
- **Constants:** SCREAMING_SNAKE_CASE for true constants (`MAX_CART_ITEMS`).
- **Redux slices / stores:** file `cart-slice.ts`, exports `cartReducer`.

### Role suffixes

Use a dot-suffix when the role of a file is not obvious from its folder, mostly in the api:

```
products.routes.ts    products.controller.ts    products.service.ts
products.schemas.ts   products.repository.ts
```

### The honest caveat

The most common alternative is **PascalCase component files** (`ProductCard.tsx`), which many React teams use and which is perfectly acceptable. The rule that matters more than the choice is **consistency**: pick one convention, write it down, and enforce it with a lint rule (see section 12). Do not mix `Button/` folders with `header.tsx` files, as the earlier version of this structure did.

### Singular versus plural

Pick one and stay with it. This document uses **plural for feature and module folders** (`products`, `orders`) because they represent collections of a domain, and singular for a single thing (`cart`, `auth`, `dashboard`).

---

## 5. Dependency rules

Rules are what keep a structure clean over time. There are two levels.

### 5.1 Between workspace members (monorepo level)

```
apps/*  ──►  packages/*
```

1. **Apps may import packages.**
2. **Packages never import apps.** A shared package that reaches into an app is no longer shared.
3. **Apps never import other apps.** `web` must not import from `admin`, and neither may import from `api`. If two apps need the same code, it moves into a package.
4. **Frontends never import backend code.** The only thing web, admin and api share about the API is `@repo/contracts` (types and schemas).
5. **The api never imports React packages.** `@repo/ui` is frontend only.
6. **Packages may depend on other packages only in one direction**, and without cycles (`api-client` may use `contracts`; `contracts` must not use `api-client`).

### 5.2 Inside a frontend app (web or admin)

```
app  →  pages  →  features  →  shared (layouts, components, hooks, services, utils)
```

1. `app` may import from anything.
2. `pages` may import from `features`, `layouts` and shared code.
3. `features` may import from shared code and from **other features only through their `index.ts`**.
4. Shared folders (`components/`, `hooks/`, `utils/`, `services/`) **never import from `features/`**.
5. Keep feature-to-feature dependencies one-directional and acyclic. For example `checkout → cart` and `checkout → orders`, never the reverse.

### 5.3 Inside the api

```
routes  →  controllers  →  services  →  repositories  →  database
```

Each layer only calls the one below it. Controllers never touch the database, and services never touch Express `req`/`res`.

---

## 6. Shared packages

### `packages/contracts`: the most valuable package

It holds the **shape of the API**: request and response types and validation schemas. The api uses them to validate input, and the frontends use them for typing. When someone changes a field, TypeScript fails in every app that is affected. This replaces the old per-feature `types.ts` for anything that crosses the network.

```ts
// packages/contracts/src/products.ts
import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  priceCents: z.number().int().nonnegative(),
  imageUrl: z.string().url(),
});

export const createProductSchema = productSchema.omit({ id: true });

export type Product = z.infer<typeof productSchema>;
export type CreateProductInput = z.infer<typeof createProductSchema>;
```

```
packages/contracts/src/
├── products.ts
├── orders.ts
├── auth.ts
├── common.ts          # pagination, error envelope
└── index.ts
```

### `packages/ui`: shared primitives

`button`, `input`, `modal`, `spinner`, `table`. No business knowledge: a button does not know what a product is. Both web and admin use it, which keeps the two visually consistent.

```
packages/ui/src/
├── button/
│   ├── button.tsx
│   └── index.ts
├── input/
├── modal/
├── spinner/
└── index.ts
```

### `packages/api-client`: typed HTTP client

A configured fetch/axios instance plus typed functions for calling the API, so web and admin do not each reinvent base URLs, auth headers and error handling. Optional at first. If you skip it, each app keeps its own small `services/api-client.ts`.

### `packages/utils`

Pure functions used by more than one app (`format-currency`, `format-date`). Same input, same output, no React, no side effects. Anything used by only one app stays in that app's own `utils/`.

### `packages/config-typescript` and `packages/config-eslint`

Shared base configs that each app extends, so rules are defined once.

---

## 7. `apps/web`: the customer storefront

```
apps/web/src/
├── app/                          # App shell: wiring only, no business logic
│   ├── app.tsx
│   ├── router.tsx
│   ├── providers.tsx
│   └── store.ts                  # Composes feature reducers + global slices
│
├── features/
│   ├── products/                 # Catalog & product detail
│   │   ├── components/
│   │   │   ├── product-card.tsx
│   │   │   ├── product-grid.tsx
│   │   │   ├── product-detail.tsx
│   │   │   └── product-filters.tsx
│   │   ├── hooks/
│   │   │   ├── use-products.ts
│   │   │   └── use-product-filters.ts
│   │   ├── services/
│   │   │   └── products-api.ts
│   │   └── index.ts              # Public exports
│   │
│   ├── cart/
│   │   ├── components/
│   │   │   ├── cart-item.tsx
│   │   │   ├── cart-summary.tsx
│   │   │   └── cart-modal.tsx
│   │   ├── hooks/
│   │   │   └── use-cart.ts
│   │   ├── store/
│   │   │   └── cart-slice.ts     # Feature-scoped client state
│   │   └── index.ts
│   │
│   ├── checkout/                 # Depends on cart and orders (one direction)
│   │   ├── components/
│   │   │   ├── address-form.tsx
│   │   │   ├── payment-form.tsx
│   │   │   └── order-review.tsx
│   │   ├── hooks/
│   │   │   └── use-checkout.ts
│   │   ├── services/
│   │   │   └── payments-api.ts
│   │   └── index.ts
│   │
│   ├── orders/                   # Order history & tracking
│   │   ├── components/
│   │   │   ├── order-list.tsx
│   │   │   └── order-detail.tsx
│   │   ├── hooks/
│   │   │   └── use-orders.ts
│   │   ├── services/
│   │   │   └── orders-api.ts
│   │   └── index.ts
│   │
│   └── auth/                     # Customer login, registration, account
│       ├── components/
│       │   ├── login-form.tsx
│       │   ├── register-form.tsx
│       │   └── profile-card.tsx
│       ├── hooks/
│       │   └── use-auth.ts
│       ├── store/
│       │   └── auth-slice.ts
│       ├── services/
│       │   └── auth-api.ts
│       └── index.ts
│
├── pages/                        # Route-level views (thin compositors)
│   ├── home-page.tsx
│   ├── product-page.tsx
│   ├── cart-page.tsx
│   ├── checkout-page.tsx
│   ├── orders-page.tsx
│   └── account-page.tsx
│
├── layouts/                      # Page frames; ALLOWED to import features
│   ├── main-layout.tsx
│   ├── header.tsx                # Uses useAuth + useCart (cart badge, user menu)
│   └── footer.tsx
│
├── components/                   # Optional: web-only shared UI (no business logic)
├── store/
│   └── slices/
│       ├── ui-slice.ts           # Theme, mobile menu open/closed
│       └── notification-slice.ts
├── hooks/                        # Hooks shared by multiple features
│   ├── use-debounce.ts
│   └── use-media-query.ts
├── services/
│   └── api-client.ts             # Or use @repo/api-client instead
├── utils/
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
└── styles/
    ├── globals.css
    └── theme.css
```

Notes on what changed from the earlier version:

- **Global primitives moved to `packages/ui`**, since admin needs them too.
- **`layouts/` is separate from shared components.** A real header shows the logged-in user and cart count, so it must import features. It therefore cannot sit in a folder that is forbidden from importing features.
- **`store.ts` moved into `app/`.** Composing the root store requires importing `cartReducer` and `authReducer` from features, and shared code is not allowed to do that. `app/` is allowed to import anything.
- **`useFetch` was removed.** See section 11.
- **Feature `types.ts` files were dropped** in favour of `@repo/contracts`. Add a `types.ts` to a feature only for UI-only types (for example a filter-panel state shape).

```ts
// apps/web/src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/features/cart";
import { authReducer } from "@/features/auth";
import uiReducer from "@/store/slices/ui-slice";
import notificationReducer from "@/store/slices/notification-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    ui: uiReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

## 8. `apps/admin`: the admin panel

The admin panel is a different product from the storefront: tables, forms, bulk actions, charts, role-based access. It follows the same architecture but has its own features.

```
apps/admin/src/
├── app/
│   ├── app.tsx
│   ├── router.tsx
│   ├── providers.tsx
│   └── store.ts
│
├── features/
│   ├── dashboard/                # Sales, orders and stock overview
│   │   ├── components/
│   │   │   ├── stats-cards.tsx
│   │   │   └── sales-chart.tsx
│   │   ├── hooks/
│   │   │   └── use-dashboard-stats.ts
│   │   ├── services/
│   │   │   └── dashboard-api.ts
│   │   └── index.ts
│   │
│   ├── products/                 # MANAGE products (create, edit, delete, stock)
│   │   ├── components/
│   │   │   ├── product-table.tsx
│   │   │   ├── product-form.tsx
│   │   │   └── stock-editor.tsx
│   │   ├── hooks/
│   │   │   ├── use-products.ts
│   │   │   └── use-product-mutations.ts
│   │   ├── services/
│   │   │   └── products-admin-api.ts
│   │   └── index.ts
│   │
│   ├── orders/                   # Review, fulfil, refund
│   ├── users/                    # Customer and staff management
│   └── auth/                     # Staff login, role checks
│
├── pages/
│   ├── dashboard-page.tsx
│   ├── products-page.tsx
│   ├── product-edit-page.tsx
│   ├── orders-page.tsx
│   ├── users-page.tsx
│   └── login-page.tsx
│
├── layouts/
│   ├── admin-layout.tsx
│   ├── sidebar.tsx
│   └── topbar.tsx
│
├── hooks/
├── services/
│   └── api-client.ts
├── utils/
├── assets/
└── styles/
```

Important points:

- **Admin's `products` feature is not web's `products` feature.** They share the *type* (`Product` from `@repo/contracts`) and the primitives (`@repo/ui`), but the behaviour is different (browsing versus managing). Do not try to share feature code between apps. If you catch yourself wanting to import `apps/web/src/features/products` into admin, either the code belongs in a package, or the two features are genuinely different and should stay separate. Duplicating a small amount of code between apps is cheaper than coupling them.
- **Why a separate app and not a `/admin` route inside web?** Separate bundles (customers never download admin code), independent deploys, a different auth flow, and a smaller attack surface. A route inside web is acceptable only for a very small admin.
- **Frontend role checks are for UX only.** Hiding a button does not protect anything. Real authorisation happens in the api (section 9).

---

## 9. `apps/api`: the backend

The backend uses the same idea as features, called **modules**. Each module owns everything for one domain, so changing "orders" touches one folder.

```
apps/api/src/
├── server.ts                     # Starts the HTTP server
├── app.ts                        # Builds the Express app: middleware + routes
├── config/
│   └── env.ts                    # Validates and exports environment variables
│
├── modules/
│   ├── products/
│   │   ├── products.routes.ts        # Public routes (used by web)
│   │   ├── products.admin.routes.ts  # Admin-only routes (used by admin)
│   │   ├── products.controller.ts    # HTTP in/out, calls the service
│   │   ├── products.service.ts       # Business rules
│   │   ├── products.repository.ts    # Database access only
│   │   ├── products.schemas.ts       # Request validation (uses @repo/contracts)
│   │   └── index.ts
│   ├── cart/
│   ├── orders/
│   ├── payments/
│   ├── users/
│   └── auth/
│
├── middleware/
│   ├── authenticate.ts           # Verifies the token, attaches the user
│   ├── authorize.ts              # Role checks (customer / staff / admin)
│   ├── validate.ts               # Runs a schema against req.body/query/params
│   └── error-handler.ts          # Single place that formats errors
│
├── db/
│   ├── client.ts
│   ├── schema/
│   ├── migrations/
│   └── seed.ts
│
├── lib/                          # Wrappers around third parties
│   ├── logger.ts
│   ├── mailer.ts
│   └── payment-provider.ts
│
└── utils/
```

### How a request flows

```
Request → route → middleware (authenticate, authorize, validate)
        → controller → service → repository → database
```

```ts
// modules/products/products.routes.ts
import { Router } from "express";
import { validate } from "@/middleware/validate";
import { listProductsQuerySchema } from "./products.schemas";
import { listProducts } from "./products.controller";

export const productsRouter = Router();
productsRouter.get("/", validate({ query: listProductsQuerySchema }), listProducts);
```

```ts
// modules/products/products.admin.routes.ts
import { Router } from "express";
import { authenticate } from "@/middleware/authenticate";
import { authorize } from "@/middleware/authorize";
import { createProductSchema } from "@repo/contracts";
import { validate } from "@/middleware/validate";
import { createProduct } from "./products.controller";

export const productsAdminRouter = Router();
productsAdminRouter.use(authenticate, authorize("admin", "staff"));
productsAdminRouter.post("/", validate({ body: createProductSchema }), createProduct);
```

```ts
// app.ts (excerpt)
app.use("/api/products", productsRouter);          // storefront
app.use("/api/admin/products", productsAdminRouter); // admin panel
```

### Layer responsibilities

- **Routes** declare URL, method and middleware. No logic.
- **Controllers** translate HTTP to a function call and back (read params, call the service, send the response). No business rules and no database calls.
- **Services** hold business rules ("an order cannot be placed if stock is insufficient"). They know nothing about Express.
- **Repositories** are the only place that talks to the database. Swapping the ORM or database touches only these files.
- **Middleware** handles cross-cutting concerns once, instead of in every handler.

### Web and admin share one api

Web and admin both call the same backend. The separation is done through **route prefixes and roles** (`/api/admin/*` requires an admin role), not by building two backends. Authorisation must always be enforced here, never trusted to the frontend.

---

## 10. Anatomy of a frontend feature

Every feature in web and admin follows the same internal layout, so any feature feels familiar:

- **`components/`**: UI specific to this feature.
- **`hooks/`**: logic that connects UI to data and state. Components stay declarative; hooks hold behaviour.
- **`services/`**: functions that call the backend for this feature. They return data and do not touch React.
- **`store/`**: feature-scoped client state, only when the feature needs it.
- **`index.ts`**: the feature's **public API**. The only file other code may import from.

### Data flow

```
Component  →  Hook  →  Service  →  api-client  →  api
   ▲           │
   └── state ──┘
```

```ts
// apps/web/src/features/products/services/products-api.ts
import { apiClient } from "@/services/api-client";
import type { Product } from "@repo/contracts";

export async function fetchProducts(): Promise<Product[]> {
  const { data } = await apiClient.get<Product[]>("/products");
  return data;
}
```

```ts
// apps/web/src/features/products/hooks/use-products.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/products-api";

export function useProducts() {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
}
```

```tsx
// apps/web/src/features/products/components/product-grid.tsx
import { Spinner } from "@repo/ui";
import { useProducts } from "../hooks/use-products";
import { ProductCard } from "./product-card";

export function ProductGrid() {
  const { data: products, isLoading } = useProducts();
  if (isLoading) return <Spinner />;
  return (
    <div>
      {products?.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
```

### The public API: `index.ts`

```ts
// features/cart/index.ts
export { CartItem } from "./components/cart-item";
export { CartSummary } from "./components/cart-summary";
export { CartModal } from "./components/cart-modal";
export { useCart } from "./hooks/use-cart";
export { default as cartReducer } from "./store/cart-slice";
```

If `checkout` imports `cart/components/cart-summary` directly, renaming that file breaks checkout. If it imports from `cart` (the index), cart's internals can be reorganised freely.

```ts
// Good
import { useCart } from "@/features/cart";

// Bad: reaching into another feature's internals
import { useCart } from "@/features/cart/hooks/use-cart";
```

**A caution about barrel files.** Use `index.ts` at the feature root, where it acts as a deliberate boundary. Do not add one to every subfolder. Excessive barrels cause circular imports and can slow bundling and hurt tree-shaking.

---

## 11. State management placement

- **Server data** (products, orders): use **TanStack Query** (or SWR) inside feature hooks. It provides caching, deduplication, retries, loading and error states. This is why a hand-rolled `useFetch` was removed: it re-implements these badly.
- **Feature client state** (cart contents, auth session): the feature's `store/` slice.
- **Global UI state** (theme, mobile menu, toasts): the app's `store/slices/`.
- **Local component state** (a modal open flag, a form field): plain `useState`. Do not push everything into a global store.

---

## 12. Enforcing the rules with tooling

Conventions fade without enforcement.

**Block deep imports into features:**

```js
// eslint config (excerpt)
module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["@/features/*/*"],
            message: "Import from the feature root (index.ts) only.",
          },
        ],
      },
    ],
  },
};
```

**Enforce kebab-case file names** (using `eslint-plugin-check-file` or `eslint-plugin-unicorn`):

```js
// with eslint-plugin-unicorn
rules: {
  "unicorn/filename-case": ["error", { case: "kebabCase" }],
}
```

**Path alias inside each app:**

```json
// apps/web/tsconfig.json (excerpt)
{
  "extends": "@repo/config-typescript/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

`@/features/cart` resolves to `apps/web/src/features/cart`. Note that `@/` is **per app**. It always means "this app's `src`", never another app's, which helps reinforce the rule that apps do not import each other.

**Forbid cross-app imports:** declare dependencies only in each app's `package.json`. If `web` does not list `admin` as a dependency, pnpm's strict `node_modules` layout means an import of it simply fails. Add `eslint-plugin-boundaries` or `dependency-cruiser` for stricter checks.

---

## 13. Where does this code go? A decision guide

Ask in order:

1. **Is it used by more than one app?** Then it belongs in a `packages/*` package (types go in `contracts`, primitives in `ui`, pure helpers in `utils`).
2. **Does it know about a business concept** (product, cart, order)? Then it belongs in a feature (or an api module).
3. **Is it used by one feature only?** Keep it inside that feature, even if it looks generic.
4. **Used by two or more features in one app, with no business knowledge?** Move it to that app's shared folder (`hooks/`, `utils/`, `components/`).
5. **Is it a pure function with no React?** `utils/`.
6. **Is it a page frame that needs user or cart data?** `layouts/`.
7. **Is it a route-level screen?** `pages/`, kept thin.
8. **Is it backend logic?** `apps/api/src/modules/<domain>`, in the right layer.

The rule of thumb is **colocate first, promote later**. Start code inside the feature that needs it, and move it to shared only when a second real consumer appears.

---

## 14. Common mistakes

- **Putting web and admin in one app.** Their audiences, bundles and security needs differ.
- **Importing one app from another.** Extract the shared piece into a package instead.
- **Duplicating API types in each app.** Keep one definition in `@repo/contracts`.
- **Trusting the frontend for authorisation.** Always enforce roles in the api.
- **Dumping everything into shared `components/`.** If it mentions "product" or "order", it is a feature component.
- **Fat pages.** Pages that fetch data, hold state and render markup become unmaintainable. Push logic into feature hooks.
- **Business logic in controllers or routes.** Keep it in services.
- **Database calls outside repositories.** It makes swapping or testing the database painful.
- **Circular feature dependencies.** `cart` importing `checkout` while `checkout` imports `cart` signals a design problem.
- **Over-sharing too early.** A "shared" hook used by one feature is just indirection.
- **Mixed naming conventions.** Choose kebab-case once and enforce it.
- **Empty folders "just in case".** The trees above show the maximum, not a required minimum.

---

## 15. If the frontend is Next.js

The trees above assume a Vite-style SPA with React Router. If `web` (or `admin`) is Next.js:

- In Next.js, **`app/` is the routing directory**, so it replaces both `app/router.tsx` and `pages/`. Route folders and `page.tsx` files live in `src/app`.
- Put providers in `src/app/providers.tsx` and use it from the root `layout.tsx`.
- Keep `features/`, `layouts/`, `hooks/`, `utils/` and the rest unchanged. Route files in `src/app` stay thin and compose feature components, which is exactly the role `pages/` played.
- If you use the older Pages Router, `src/pages` is a framework directory. Do not use that name for anything else.
- Remember the server/client component boundary: files that use hooks or browser APIs need `"use client"`, and a feature's `index.ts` barrel can accidentally pull client code into server components. Consider separate entry points if that happens.

---

## 16. Scaling the structure

- **Small project:** skip `packages/api-client` and `config-*` packages at first. Start with `contracts` and `ui`, which pay off earliest.
- **Growing app:** introduce a feature as soon as a group of files always changes together.
- **Larger team:** assign ownership per feature folder or api module. With enforced boundaries, a module can later be extracted into its own service with little rework.
- **Very large feature:** nest it. A big `checkout` feature may contain `address/` and `payment/` sub-areas following the same internal anatomy.

---

## 17. Summary

- **Repository:** a monorepo with `apps/web`, `apps/admin`, `apps/api` and shared `packages/*`.
- **Sharing:** only through packages. `@repo/contracts` for API shapes, `@repo/ui` for primitives, `@repo/utils` for pure helpers.
- **Grouping inside an app:** by feature first, file type second.
- **Sharing inside an app:** colocate first, promote only when a second consumer exists.
- **Boundaries:** other features are imported only through their `index.ts`.
- **Direction:** `app → pages → features → shared`, and `apps → packages`, never the reverse.
- **Pages:** thin compositors. Logic lives in feature hooks.
- **Layouts:** may import features. Shared UI may not.
- **Api:** modules, each with routes, controller, service and repository. Authorisation enforced server-side.
- **Naming:** kebab-case for files and folders, PascalCase for components and types, camelCase for functions and hooks.
- **Data access (frontend):** components → hooks → services → api client, with TanStack Query for server data.

The best structure is the one your team can follow consistently. Pick the rules, enforce them with tooling, and revisit the layout when real pain appears rather than before.