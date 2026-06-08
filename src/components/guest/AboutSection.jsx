const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80" alt="Tentang Sedap" className="rounded-3xl shadow-xl" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-black mb-4">Kenapa Memilih <span className="text-emerald-500">Sedap</span>?</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Sedap Aplikasi adalah platform digital yang menghubungkan pecinta makanan dengan kuliner terbaik. Kami memastikan setiap makanan yang direkomendasikan memiliki standar rasa tinggi, kebersihan terjamin, dan harga yang ramah di kantong.
          </p>
          <ul className="space-y-3 font-bold text-slate-700">
            <li className="flex items-center"><i className="fas fa-check-circle text-emerald-500 mr-3"></i> Bahan Segar Berkualitas</li>
            <li className="flex items-center"><i className="fas fa-check-circle text-emerald-500 mr-3"></i> Resep Autentik Nusantara</li>
            <li className="flex items-center"><i className="fas fa-check-circle text-emerald-500 mr-3"></i> Harga Terjangkau</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;