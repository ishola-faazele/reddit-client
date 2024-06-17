import React, { useState } from 'react';
import { FaReddit, FaHome, FaFire, FaUserFriends, FaQuestionCircle, FaNewspaper, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link,  } from 'react-router-dom';
import Modal from './Modal.tsx';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [externalLink, setExternalLink] = useState('');
  // const history = useHistory();

  const handleExternalLinks = (url: string) => {
    setExternalLink(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setExternalLink('');
  };

  const handleConfirmModal = () => {
    window.open(externalLink, '_blank');
    setIsModalOpen(false);
    setExternalLink('');
  };

  return (
    <div className="Sidebar w-full sm:w-80 h-full mt-12 left-1 bg-gray-800 text-white fixed flex flex-col ">
      {/* Logo */}
      <div className="logo p-4 text-2xl flex items-center justify-center">
        <Link to="/">
          <FaReddit />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-4 overflow-y-auto flex-1"> {/* Add flex-1 for proper scrolling */}
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
          <a onClick={() => handleExternalLinks('https://www.redditinc.com/')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            <FaNewspaper className="mr-2" />
            About Reddit
          </a>
          <a onClick={() => handleExternalLinks('https://accounts.reddit.com/adsregister?utm_source=web3x_consumer&utm_name=left_nav_cta')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            <FaBriefcase className="mr-2" />
            Advertise
          </a>
          <a onClick={() => handleExternalLinks('https://www.reddithelp.com/')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            <FaQuestionCircle className="mr-2" />
            Help
          </a>
          <a onClick={() => handleExternalLinks('https://redditblog.com/')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            <FaEnvelope className="mr-2" />
            Blog
          </a>
          <a onClick={() => handleExternalLinks('https://www.redditinc.com/careers')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            <FaBriefcase className="mr-2" />
            Careers
          </a>
          <a onClick={() => handleExternalLinks('https://www.redditinc.com/press')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            <FaNewspaper className="mr-2" />
            Press
          </a>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Reddit Features */}
        <div className="flex flex-col text-sm">
          <a onClick={() => handleExternalLinks('https://www.reddit.com/best/communities/1/')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            Communities
          </a>
          <a onClick={() => handleExternalLinks('https://www.reddit.com/posts/2024/global/')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            Best of Reddit
          </a>
          <a onClick={() => handleExternalLinks('https://www.reddit.com/topics/a-1/')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            Topics
          </a>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Reddit Policies */}
        <div className="flex flex-col text-sm">
          <a onClick={() => handleExternalLinks('https://www.redditinc.com/policies/content-policy')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            Content Policy
          </a>
          <a onClick={() => handleExternalLinks('https://www.reddit.com/policies/privacy-policy')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            Privacy Policy
          </a>
          <a onClick={() => handleExternalLinks('https://www.redditinc.com/policies/user-agreement')} className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
            User Agreement
          </a>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 text-sm">
        <a href="https://redditinc.com" target="_blank" rel="noopener noreferrer" className="no-underline text-tone-2">
          Reddit, Inc. © 2024. All rights reserved.
        </a>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmModal} />
    </div>
  );
};

export default Sidebar;
