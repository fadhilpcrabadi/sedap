import { useState, useEffect } from "react";
import testimonialsData from "../../data/testimonials.json";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <section id="testimoni" className="py-20 bg-emerald-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black">Apa Kata <span className="text-emerald-400">Mereka</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {testimonials.map((testi) => (
            <div key={testi.id} className="bg-emerald-800 p-6 rounded-2xl text-center border border-emerald-700">
              <img src={testi.avatar} alt={testi.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-emerald-400 bg-emerald-100" />
              <h4 className="font-bold text-emerald-300 mb-2">{testi.name}</h4>
              <p className="text-emerald-100 text-sm italic">"{testi.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;