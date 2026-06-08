import { Link } from "react-router-dom";

const GuestHeader = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl h-20 flex justify-between items-center">
        {/* Logo Sedap */}
        <Link to="/" className="text-3xl font-extrabold text-slate-800">
          Sedap<span className="text-emerald-500">.</span>
        </Link>
        
        {/* Menu Navigasi */}
        <nav className="hidden md:flex space-x-8 font-bold text-slate-600">
          <a href="#home" className="hover:text-emerald-500 text-emerald-500">Home</a>
          <a href="#about" className="hover:text-emerald-500">Tentang Kami</a>
          <a href="#products" className="hover:text-emerald-500">Produk</a>
          <a href="#testimoni" className="hover:text-emerald-500">Testimoni</a>
        </nav>

        {/* Tombol Login / Register */}
        <div className="flex space-x-3">
          <Link to="/login" className="px-5 py-2.5 font-bold text-slate-600 hover:text-emerald-600 transition">
            Login
          </Link>
          <Link to="/register" className="px-5 py-2.5 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition shadow-lg shadow-emerald-200">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;