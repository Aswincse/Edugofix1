// src/components/Navbar.js
import React, { useState } from 'react';
import { FaRocket, FaUserCircle, FaSignInAlt } from 'react-icons/fa'; // Import icons
import './Navbar.css'; // Ensure your CSS file is correct

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <FaRocket className="navbar-icon" />
        <h1>EduGo!</h1>
      </div>
      <div className="navbar-menu">
        <button className="admin-login-btn">
          <FaSignInAlt /> Admin Login
        </button>
        <div className="account-icon" onClick={handleDropdownToggle}>
          <FaUserCircle className="account-icon-image" />
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Username</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
