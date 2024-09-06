'use client'

import Image from "next/image";
import { sidebarStore } from "../../stores/sidebar.store";
import BurgerIcon from "../../components/svg/burger-icon";
import { useState } from "react";

export default function Navbar() {
  const isOpen: boolean = sidebarStore((state) => state.isOpen);
  const toggleSidebar: () => void = sidebarStore((state) => state.toggle);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="sticky top-0 z-40">
      <div className="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">
        <div className="flex">
          <div className="inline-block md:hidden flex items-center mr-4">
            <button 
              className="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
              onClick={toggleSidebar}
            >
              <BurgerIcon className={isOpen ? 'fill-current' : ''} />
            </button>
          </div>
          <div className="relative text-gray-600">
            <input type="search" name="serch" placeholder="Search products..." className="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg 
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px" 
                viewBox="0 0 56.966 56.966" 
                width="512px" height="512px">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center relative">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="fill-current mr-3 hover:text-blue-500">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
          <Image src="/images/avatar.webp" width="272" height="92" alt="" className="w-12 h-12 rounded-full shadow-lg cursor-pointer" onClick={toggleProfile} />
        </div>
      </div>
      {isProfileOpen && (
       <div className="absolute right-2 top-10 mt-5 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="p-6">
            <div className="mb-4">
              <p className="text-lg font-semibold">Sam Balmart</p>
              <p className="text-sm text-gray-600">sam.balmart@example.com</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Role:</p>
              <p className="text-md text-gray-900">Software Engineer</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Joined:</p>
              <p className="text-md text-gray-900">January 2021</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Location:</p>
              <p className="text-md text-gray-900">New York, USA</p>
            </div>

            <button className="w-full text-center text-white bg-blue-500 rounded py-3 hover:bg-blue-600">
              Logout
            </button>
          </div>
        </div>
        )}
    </div>
  );
}
