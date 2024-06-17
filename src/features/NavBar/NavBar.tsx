// src/components/NavBar.tsx
import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { FaReddit } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SideBar from '../SideBar/SideBar';

const NavBar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="NavBar flex flex-wrap justify-between items-center mb-4 sm:mb-8 px-1 xs:px-2 md:px-4 relative">

      {/**reddit logo and name */}
      <div className="reddit-logo text-5xl cursor-pointer flex items-center gap-2">
        <button className="cursor-pointer mr-4 text-2xl" onClick={toggleSidebar}>
            <CiMenuBurger />
        </button>
        <Link to="/" className='flex items-center justify-center gap-4'>
          <FaReddit className=''/>
          <h2 className='hidden sm:block font-extrabold'>BluDit</h2>
        </Link>
      </div>

      {/*SearchBar */}
      <div className="search-bar flex-1 mx-6 sm:mx-12 w-full max-w flex items-center justify-center xl:ml-[-3rem]">
        <SearchBar />
      </div>

      {/**Login and Dark theme */}
      <div className='flex items-center xs:gap-4 gap-2'>
        <div className="login cursor-pointer bg-black text-white p-2 rounded-full">Log In</div>
        <ThemeToggle />
      </div>
      
      {/** Sidebar */}
      <div id= 'side-bar-div' className={`${sidebarOpen ? 'block' : 'hidden'} absolute z-50 top-8 left-0`}>
        <SideBar />
      </div>
    </div>
  );
};

export default NavBar;
