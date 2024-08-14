import React, { useContext, useState } from 'react';
import { FaRocket, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { UserContext1 } from './UserContext1';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { userName1 } = useContext(UserContext1);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <FaRocket className="navbar-icon" />
        <h1>EduGo!</h1>
      </div>
      <div className="navbar-menu">
        <div className="account-icon" onClick={handleDropdownToggle}>
          <FaUserCircle className="account-icon-image" />
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                Hello, {userName1}
              </div>
              <div className="dropdown-item" onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
