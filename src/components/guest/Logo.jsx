import { Link } from "react-router-dom";

const Logo = ({ variant = "dark" }) => {
  // Jika variant 'light', teks jadi putih (untuk footer)
  // Jika variant 'dark', teks jadi hitam (untuk header)
  const textColor = variant === "light" ? "text-white" : "text-slate-800";

  return (
    <Link to="/" className={`text-3xl font-extrabold tracking-tighter ${textColor}`}>
      Sedap<span className="text-emerald-500">.</span>
    </Link>
  );
};

export default Logo;