import { Link } from 'react-router-dom';

const GuestSidebar = ({ popularPosts }) => {
  return (
    <aside className="w-full lg:w-1/3 space-y-8">
      {/* Widget About Me */}
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
        <h3 className="font-bold text-lg mb-6 relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-pink-500"></span>
        </h3>
        <div className="w-28 h-28 mx-auto rounded-full mb-4 overflow-hidden border-4 border-slate-50 shadow-sm">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80" alt="Author" className="w-full h-full object-cover" />
        </div>
        <h4 className="font-bold text-slate-800 mb-2">Hello, I'm Admin</h4>
        <p className="text-slate-500 text-sm">Saya adalah seorang web developer dan content creator.</p>
      </div>

      {/* Widget Popular Posts */}
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="font-bold text-lg mb-6 relative inline-block">
          Popular Posts
          <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-pink-500"></span>
        </h3>
        <div className="space-y-5">
          {popularPosts.map(post => (
            <div key={`popular-${post.id}`} className="flex gap-4 items-center group">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight mb-1">
                  <Link to={`/guest/detail/${post.id}`} className="hover:text-pink-500 transition-colors">
                    {post.title}
                  </Link>
                </h4>
                <span className="text-xs text-slate-400">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default GuestSidebar;