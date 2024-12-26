import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faUser,
  faSearch,
  faEnvelope,
  faCog,
  faSignOutAlt,
  faChevronLeft,
  faCaretDown,
  faCaretUp,
  faQuestionCircle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Logo from "../src/assets/logo/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      link: "/",
      icon: "faHome",
      submenus: [],
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: "faChartBar",
      submenus: [
        { name: "Analytics", link: "/dashboard/analytics" },
        { name: "Charts", link: "/dashboard/charts" },
        { name: "Graphs", link: "/dashboard/graphs" },
      ],
    },
    {
      name: "Contacts",
      link: "/contacts",
      icon: "faUser",
      submenus: [],
    },
    {
      name: "About",
      link: "/about",
      icon: "faQuestionCircle",
      submenus: [],
    },
    {
      name: "Settings",
      link: "/settings",
      icon: "faCog",
      submenus: [
        { name: "Profile", link: "/settings/profile" },
        { name: "Privacy", link: "/settings/privacy" },
        { name: "Notifications", link: "/settings/notifications" },
      ],
    },
  ];

  const toggleSidebar = () => {
    if (isOpen) {
      setOpenSubmenus({});
    }
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menuName) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getIcon = (iconName) => {
    const iconMap = {
      faHome: faHome,
      faChartBar: faChartBar,
      faUser: faUser,
      faEnvelope: faEnvelope,
      faCog: faCog,
      faSignOutAlt: faSignOutAlt,
      faQuestionCircle: faQuestionCircle,
      faUserCircle: faUserCircle,
    };
    return iconMap[iconName] || faHome;
  };

  const filterMenuItems = (items) => {
    if (!searchQuery) return items;
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.submenus.some((submenu) =>
          submenu.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-56" : "w-16"
        } h-screen border bg-white text-blue-600 transition-all duration-500 relative`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center py-4 px-6 border-b border-base-300">
          {isOpen ? (
            <>
              <img src={Logo} alt="Logo" className="w-6 h-6" />
              <span className="ml-2 mt-2 text-lg font-semibold gradient-text">
                Intellisync
              </span>
            </>
          ) : (
            <div className="mb-7"></div>
          )}
        </div>

        {/* Search Bar */}
        {isOpen && (
          <div className="px-3 py-3 relative">
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-2 bg-gray-100 text-gray-700 rounded-full focus:outline-none shadow-sm"
              />
            </div>
          </div>
        )}

        {/* Sidebar Toggle Button */}
        <button
          className="absolute top-3 right-4 text-blue-600 p-2 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-sm border rounded-full px-3 py-2"
            />
          ) : (
            <img src={Logo} alt="Icon" className="w-6 h-6 " />
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen
              ? "space-y-2 sub-menu"
              : "flex flex-col items-center justify-start mt-2 h-full space-y-4"
          }`}
        >
          {filterMenuItems(menuItems).map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => !isOpen && setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative"
            >
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center cursor-pointer hover:bg-blue-100 py-2 px-2 mx-2 transition-all duration-300 rounded-lg ${
                    isActive ? "bg-blue-100 text-blue-500" : ""
                  }`
                }
                onClick={() => toggleSubmenu(item.name)}
              >
                <span className="text-lg text-blue-500 px-3">
                  <FontAwesomeIcon icon={getIcon(item.icon)} />
                </span>
                {isOpen && (
                  <span className="ml-1 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-500 font-poppins">
                    {item.name}
                  </span>
                )}
                {item.submenus.length > 0 && isOpen && (
                  <span className="ml-auto text-sm text-gray-700">
                    {openSubmenus[item.name] ? (
                      <FontAwesomeIcon icon={faCaretUp} />
                    ) : (
                      <FontAwesomeIcon icon={faCaretDown} />
                    )}
                  </span>
                )}
              </NavLink>

              {/* Submenus */}
              <ul
                className={`pl-6 mt-2 overflow-hidden text-gray-700 transition-transform duration-500 ease-in-out transform ${
                  openSubmenus[item.name] ? "scale-y-100" : "scale-y-0"
                }`}
                style={{ transformOrigin: "top" }}
              >
                {openSubmenus[item.name] &&
                  item.submenus.length > 0 &&
                  item.submenus.map((submenu, submenuIndex) => (
                    <li key={submenuIndex}>
                      <NavLink
                        to={submenu.link}
                        className={({ isActive }) =>
                          `flex pl-10 font-poppins m-2 items-center cursor-pointer hover:bg-base-200 py-3 px-4 transition-all duration-700 rounded-lg ${
                            isActive ? "bg-base-200 text-black mx-2" : ""
                          }`
                        }
                      >
                        <span className="text-sm font-poppins">
                          {submenu.name}
                        </span>
                      </NavLink>
                    </li>
                  ))}
              </ul>

              {/* Show submenu as popup when sidebar is closed and hovered */}
              {!isOpen &&
                hoveredMenu === item.name &&
                item.submenus.length > 0 && (
                  <ul className="absolute text-sm left-full duration-500 p-2 top-0 bg-white shadow-lg w-fit rounded-lg mt-1">
                    {item.submenus.map((submenu, submenuIndex) => (
                      <li key={submenuIndex}>
                        <NavLink
                          to={submenu.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
                        >
                          {submenu.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>

        {/* Profile Icon at the Bottom */}
        <div
          className={`absolute bottom-4 w-full px-4 py-2 flex items-center cursor-pointer transition-all duration-300 rounded-lg ${
            isOpen ? "hover:bg-blue-100" : ""
          }`}
          onMouseEnter={() => setHoveredMenu("Profile")}
          onMouseLeave={() => setHoveredMenu(null)}
          onClick={toggleProfileMenu}
        >
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-2xl text-blue-500"
          />
          {isOpen && (
            <>
              <span className="ml-2 text-sm text-gray-700">Profile</span>
              <FontAwesomeIcon
                icon={profileMenuOpen ? faCaretUp : faCaretDown}
                className="ml-2 text-gray-700"
              />
            </>
          )}
        </div>

        {/* Profile Dropdown */}
        {(hoveredMenu === "Profile" || profileMenuOpen) && (
          <div
            className={`absolute bottom-12 text-sm left-0 w-fit z-50 bg-white border rounded-lg shadow-lg p-2 ${
              isOpen ? "" : "w-40"
            }`}
            onMouseEnter={() => setHoveredMenu("Profile")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <NavLink
              to="/settings/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
            >
              Account Settings
            </NavLink>
            <NavLink
              to="/logout"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
            >
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
