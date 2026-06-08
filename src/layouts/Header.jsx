import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div id="header-container">
            {/* Search Bar */}
            <div id="search-bar">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search Here..."
                />
                <FaSearch id="search-icon" />
            </div>

            {/* Icon & Profile Section */}
            <div id="icons-container">
                {/* Icons */}
                <div id="notification-icon">
                    <FaBell />
                    <span id="notification-badge">50</span>
                </div>
                <div id="chart-icon">
                    <FcAreaChart />
                </div>
                <div id="settings-icon">
                    <SlSettings />
                </div>
             

                {/* Profile Section */}
                <div id="profile-container">
                    <span id="profile-text">
                        Hello, <b>Fikri Muhaffizh</b>
                    </span>
                    <img
                        id="profile-avatar"
                        src="https://img.freepik.com/psd-gratis/ilustrasi-3d-dari-avatar-atau-profil-manusia_23-2150671142.jpg?semt=ais_hybrid&w=740&q=80"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
