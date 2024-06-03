import React from 'react';
import { FaHome, FaFire, FaUserFriends, FaQuestionCircle, FaNewspaper, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const SideBar: React.FC = () => {
  return (
    <div className="Sidebar w-64 h-full bg-gray-800 text-white fixed top-0 left-0 flex flex-col">
      {/* Logo */}
      {/* <div className="logo p-4 text-5xl flex items-center justify-start">
        <Link to="/">
          <FaReddit />
        </Link>
      </div> */}

      {/* Navigation */}
      <nav className="flex flex-col p-4 overflow-y-auto"> {/* Add overflow-y-auto for scrolling */}
        {/* Home */}
        <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaHome className="mr-2" />
          Home
        </Link>

        {/* Popular */}
        <Link to="/popular" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaFire className="mr-2" />
          Popular
        </Link>

        {/* All */}
        <Link to="/all" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <FaUserFriends className="mr-2" />
          All
        </Link>

        {/* Divider */}
        <hr className="my-4" />

        {/* Reddit Links */}
        <div className="flex flex-col text-sm">
          <Link to="https://www.redditinc.com/" className="flex items-center p-2 hover:bg-gray-700 rounded" target="_blank" rel="noopener noreferrer">
            <FaNewspaper className="mr-2" />
            About Reddit
          </Link>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaBriefcase className="mr-2" />
            Advertise
          </Link>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaQuestionCircle className="mr-2" />
            Help
          </Link>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaEnvelope className="mr-2" />
            Blog
          </Link>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaBriefcase className="mr-2" />
            Careers
          </Link>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaNewspaper className="mr-2" />
            Press
          </Link>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Reddit Features */}
        <div className="flex flex-col text-sm">
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            Communities
          </Link>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            Best of Reddit
          </Link>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            Topics
          </Link>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Reddit Policies */}
        <div className="flex flex-col text-sm">
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            Content Policy
          </Link>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            Privacy Policy
          </Link>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            User Agreement
          </Link>
        </div>
      {/* Footer */}
      <div className="mt-auto p-2  text-sm"> {/* Adjusted padding-bottom */}
        <a href="https://redditinc.com" target="_blank" rel="noopener noreferrer" className="no-underline text-tone-2">
          Reddit, Inc. © 2024. All rights reserved.
        </a>
      </div>
      </nav>

    </div>
  );
};

export default SideBar;
