import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex justify-center">
            <Link href="/" className="text-3xl font-bold text-black tracking-wide">
              Hani Mahdi
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="hidden md:flex justify-center space-x-12">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wide">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wide">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wide">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-300 text-sm tracking-wide">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
