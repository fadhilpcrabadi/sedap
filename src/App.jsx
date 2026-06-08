import { Routes, Route, Outlet } from "react-router-dom";

// Layouts
import GuestLayout from "./layouts/GuestLayout";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

// Pages Admin
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Products from "./pages/Products";

// Pages Guest
import GuestHome from "./pages/guest/GuestHome";

import "./assets/tailwind.css";

function AdminLayout() {
  return (
    <div
      id="app-container"
      className="bg-gray-100 min-h-screen flex w-full"
    >
      <div id="layout-wrapper" className="flex flex-row flex-1 w-full">
        <Sidebar />

        <div id="main-content" className="flex-1 p-4 w-full">
          <Header />

          {/* Tempat halaman tampil */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>

      {/* Guest */}
      <Route path="/guest" element={<GuestLayout />}>
        <Route index element={<GuestHome />} />
      </Route>

      {/* Admin */}
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="products" element={<Products />} />
      </Route>

    </Routes>
  );
}

export default App;