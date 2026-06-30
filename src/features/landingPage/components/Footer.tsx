// src/features/landingPage/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
        <Link href="/" className="font-bold text-white">Byte<span className="text-blue-400">254</span></Link>
        <div className="flex gap-4">
          <Link href="/Product" className="text-gray-400 hover:text-white">Products</Link>
          <Link href="/About" className="text-gray-400 hover:text-white">About</Link>
          <a href="#ContactUs" className="text-gray-400 hover:text-white">Contact</a>
        </div>
        <p className="text-gray-500">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}