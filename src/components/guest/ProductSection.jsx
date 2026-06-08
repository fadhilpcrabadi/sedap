import { useState, useEffect } from "react";
import productsData from "../../data/products.json";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black">Produk <span className="text-emerald-500">Unggulan</span></h2>
          <p className="text-slate-500 mt-2">Menu favorit pilihan pelanggan kami</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="h-48 overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-slate-800 mb-2">{product.name}</h3>
                <p className="text-emerald-600 font-black text-xl">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;