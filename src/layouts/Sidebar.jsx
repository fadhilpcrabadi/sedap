import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiTwotoneCustomerService } from "react-icons/ai";
import { BiBorderOuter } from "react-icons/bi";

import {
  MdDashboard,
  MdFastfood,
  MdNote,
  MdMenu,
  MdChevronLeft,
} from "react-icons/md";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuClass = ({ isActive }) =>
    `
    flex items-center transition-all duration-300
    ${
      isActive
        ? "bg-green-200 text-hijau font-bold"
        : "text-gray-600 hover:bg-green-100 hover:text-hijau"
    }
    ${
      isOpen ? "rounded-xl p-4" : "mx-auto h-14 w-14 justify-center rounded-2xl"
    }
  `;

  return (
    <aside
      className={`relative flex min-h-screen flex-col bg-white shadow-lg transition-all duration-300 ${
        isOpen ? "w-[360px] p-10" : "w-[88px] px-2 py-6"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
    absolute z-50 flex items-center justify-center
    rounded-full border border-gray-200
    bg-white shadow-sm
    transition-all duration-300
    hover:shadow-md
    ${
      isOpen
        ? "right-4 top-4 h-8 w-8"
        : "left-1/2 top-3 h-9 w-9 -translate-x-1/2"
    }
  `}
      >
        {isOpen ? <MdChevronLeft size={16} /> : <MdMenu size={16} />}
      </button>

      {/* Logo */}
      <div className="mt-8 flex flex-col">
        {isOpen ? (
          <>
            <span className="font-poppins text-[48px] text-gray-900">
              Sedap
              <span className="text-hijau">.</span>
            </span>

            <span className="font-semibold text-gray-400">
              Modern Admin Dashboard
            </span>
          </>
        ) : (
          <div className="flex justify-center">
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-gradient-to-br
                from-green-500
                to-emerald-600
                shadow-lg
              "
            >
              <MdFastfood className="text-2xl text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Menu */}
      <div className="mt-10">
        <ul className="space-y-4">
          {/* Dashboard */}
          <li className="group relative">
            <NavLink to="/" className={menuClass}>
              <MdDashboard className="text-xl" />
              {isOpen && <span className="ml-4">Dashboard</span>}
            </NavLink>

            {!isOpen && (
              <div className="pointer-events-none absolute left-16 top-1/2 z-50 -translate-y-1/2 rounded-xl bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                Dashboard
              </div>
            )}
          </li>

          {/* Orders */}
          <li className="group relative">
            <NavLink to="/orders" className={menuClass}>
              <BiBorderOuter className="text-xl" />
              {isOpen && <span className="ml-4">Orders</span>}
            </NavLink>

            {!isOpen && (
              <div className="pointer-events-none absolute left-16 top-1/2 z-50 -translate-y-1/2 rounded-xl bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                Orders
              </div>
            )}
          </li>

          {/* Customers */}
          <li className="group relative">
            <NavLink to="/customers" className={menuClass}>
              <AiTwotoneCustomerService className="text-xl" />
              {isOpen && <span className="ml-4">Customers</span>}
            </NavLink>

            {!isOpen && (
              <div className="pointer-events-none absolute left-16 top-1/2 z-50 -translate-y-1/2 rounded-xl bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                Customers
              </div>
            )}
          </li>

          {/* Products */}
          <li className="group relative">
            <NavLink to="/products" className={menuClass}>
              <MdFastfood className="text-xl" />
              {isOpen && <span className="ml-4">Products</span>}
            </NavLink>

            {!isOpen && (
              <div className="pointer-events-none absolute left-16 top-1/2 z-50 -translate-y-1/2 rounded-xl bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                Products
              </div>
            )}
          </li>

          {/* Notes */}
          <li className="group relative">
            <NavLink to="/notes" className={menuClass}>
              <MdNote className="text-xl" />
              {isOpen && <span className="ml-4">Notes</span>}
            </NavLink>

            {!isOpen && (
              <div className="pointer-events-none absolute left-16 top-1/2 z-50 -translate-y-1/2 rounded-xl bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                Notes
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Footer */}
      {isOpen && (
        <div className="mt-auto">
          <div className="mb-10 flex items-center rounded-xl bg-hijau p-4 shadow-lg">
            <div className="text-sm text-white">
              <p>Please organize your menus through button below!</p>

              <button className="mt-3 w-full rounded-md bg-white p-2 text-gray-700 transition hover:bg-gray-100">
                Add Menus
              </button>
            </div>

            <img
              className="ml-3 h-20 w-20 rounded-full object-cover"
              src="https://thispersondoesnotexist.com/"
              alt="avatar"
            />
          </div>

          <span className="block font-bold text-gray-400">
            Sedap Restaurant Admin Dashboard
          </span>

          <p className="text-gray-400">© 2025 All Rights Reserved</p>
        </div>
      )}
    </aside>
  );
}
