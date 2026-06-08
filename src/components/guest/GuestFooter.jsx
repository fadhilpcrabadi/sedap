import { AiFillYoutube, AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from "react-icons/ai"; 

const GuestFooter = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-slate-800 pb-12">
        
        {/* Info Brand & Kontak */}
        <div>
          <h3 className="text-2xl font-black text-white mb-4">Sedap<span className="text-emerald-500">.</span></h3>
          <p className="mb-4 text-sm leading-relaxed">Platform kuliner terbaik di Indonesia. Memberikan pengalaman makan yang tak terlupakan setiap harinya.</p>
          <ul className="text-sm space-y-2">
            <li><i className="fas fa-map-marker-alt text-emerald-500 mr-2"></i> Jl. Sudirman No. 123, Pekanbaru</li>
            <li><i className="fas fa-envelope text-emerald-500 mr-2"></i> hello@sedap.id</li>
            <li><i className="fas fa-phone text-emerald-500 mr-2"></i> +62 812 3456 7890</li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="text-white font-bold mb-4">Ikuti Kami</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-500 text-white transition">
              <AiFillInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-500 text-white transition">
              <AiFillFacebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-500 text-white transition">
              <AiOutlineTwitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-500 text-white transition">
              <AiFillYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Gambar Partner */}
        <div>
          <h4 className="text-white font-bold mb-4">Partner Kami</h4>
          <div className="flex flex-wrap gap-3">
            <div className="bg-white text-slate-800 px-3 py-1 rounded font-black text-xs">GO-FOOD</div>
            <div className="bg-white text-slate-800 px-3 py-1 rounded font-black text-xs">GRAB-FOOD</div>
            <div className="bg-white text-slate-800 px-3 py-1 rounded font-black text-xs">SHOPEE-FOOD</div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-slate-600">
        &copy; 2026 Sedap Aplikasi. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
};

export default GuestFooter;