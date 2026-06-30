import Link from 'next/link';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/Product' },
    { label: 'Why Us', href: '/#WhyUs' },
    { label: 'About', href: '/About'},
    { label: 'Contact', href: '/#ContactUs', target: "_self" },
  ];

  return (
    <header className="bg-gray-50 border-b border-gray-200 text-black m-4 px-4 py-4 flex flex-row mt-5 p-4 items-center justify-between rounded-lg shadow-md">
      <div className="left flex items-center">
        <span className="h-6 mr-4 text-2xl cursor-pointer hover:text-blue-600 transition">☰</span>
        <Link href="/" className="text-lg font-semibold text-black hover:text-blue-600 transition">
          <h1 className="text-2xl font-bold">Byte254</h1>
        </Link>
      </div>

      <div className="right flex items-center">
        <nav>
          <ul className="flex gap-6 list-none items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  target={item.target}
                  >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/products" className="text-lg font-semibold text-blue-600 mr-4 hover:text-blue-800 transition">
        </Link>
      </div>
    </header>
  );
};

export default Header;