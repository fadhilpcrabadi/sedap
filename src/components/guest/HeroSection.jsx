const HeroSection = () => {
  return (
    <section id="home" className="relative bg-emerald-900 h-[500px] flex items-center">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="Banner Makanan" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
          Temukan Sensasi <br/><span className="text-emerald-400">Sedap</span> Setiap Hari
        </h1>
        <p className="text-lg text-emerald-100 max-w-xl mb-8">
          Platform terbaik untuk menemukan rekomendasi kuliner Nusantara dengan cita rasa autentik. Pesan sekarang dan nikmati kelezatannya!
        </p>
        <a href="#products" className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-400 transition">
          Lihat Menu
        </a>
      </div>
    </section>
  );
};

export default HeroSection;