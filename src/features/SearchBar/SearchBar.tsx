// src/components/SearchBar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useAppDispatch } from '../../store/store';
import { fetchPosts } from '../PostCard/postsSlice';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  const [subreddit, setSubreddit] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subreddit.trim()) {
      dispatch(fetchPosts(subreddit));
      setSubreddit('');
      setIsOpened(false);
    }
  };

  const handleSearchBtn = () => {
    setIsOpened(!isOpened);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (searchInputRef.current && !searchInputRef.current.contains(e.target as Node)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="search-bar w-full flex items-center justify-center relative">
      <FaSearch 
        className={`search-icon text-2xl cursor-pointer ${isOpened ? 'hidden' : 'block'} xs:hidden`} 
        onClick={handleSearchBtn}
      />
      <input
        ref={searchInputRef}
        type="text"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
        placeholder="Search Reddit"
        className={`search-input outline-none bg-gray-200 rounded-full pl-4 h-12 transition-all duration-300 ${isOpened ? 'block' : 'hidden'} xs:block w-full max-w-[40rem]`}
      />
    </form>
  );
};

export default SearchBar;
