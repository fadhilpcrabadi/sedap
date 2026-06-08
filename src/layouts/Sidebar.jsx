import { MdProductionQuantityLimits } from "react-icons/md"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { AiOutlineUser } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div id="sidebar">
      {/* Logo */}
      <div id="sidebar-logo">
        <span id="logo-title">
          Sedap <b id="logo-dot">.</b>
        </span>
        <span id="logo-subtitle">Modern Admin Dashboard</span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu">
        <ul id="menu-list">
          <li id="menu-1">
            <Link to="/" className="menu-link">
              <AiFillHome className="mr-4 text-xl" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li id="menu-2">
            <Link to="/orders" className="menu-link">
              <AiOutlineShoppingCart className="mr-4 text-xl" />
              <span>Orders</span>
            </Link>
          </li>

          <li id="menu-3">
            <Link to="/customers" className="menu-link">
              <AiOutlineUser className="mr-4 text-xl" />
              <span>Customers</span>
            </Link>
          </li>
          
          <li id="menu-4">
            <Link to="/products" className="menu-link">
              <MdProductionQuantityLimits className="mr-4 text-xl" />
              <span>Products</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer">
        <div id="footer-card">
          <div id="footer-text">
            <span>Please organize your menus through button below!</span>
            <div id="add-menu-button">
              <span>Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="https://img.freepik.com/vektor-premium/seorang-koki-kartun-dengan-sendok-kayu-dan-tanda-yang-bertuliskan-koki_1185634-1894.jpg"
          />
        </div>
        <span id="footer-brand">Sedap Restaurant Admin Dashboard</span>
        <p id="footer-copyright">&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
