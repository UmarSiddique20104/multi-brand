"use client"
import React, { useState } from 'react';
import { Search } from '../icons/search';

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div>
      {/* Search Icon */}
      <div onClick={toggleSearchBar} className="cursor-pointer">
        <Search />
      </div>

    
      {isSearchVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" bg-white p-6 rounded-xl shadow-lg transform transition duration-500">
       <div className='flex  justify-end items-center'>

          <button
              onClick={toggleSearchBar}
              className="ml-4 text-red-500 hover:text-red-700"
            >
             <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu text-black"
          >
            
        
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
             
          </svg>
            </button>
       </div>
    
            <div className='space-y-3 pt-5  '>

            <div className="flex bg-gray-100 p-4 md:w-72 w-full space-x-4 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none w-full"
                type="text"
                placeholder="Search..."
              />
            </div>
          <div>

            <button
              type="submit"
              className="   w-full px-6 py-2 bg-[#c3202a]   text-white rounded-sm"
            >
              Search
            </button>
          </div>
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
