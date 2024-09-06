/*
  Lets use isOpen state for small screens.
  Md+ screens will override it.
  And add animation for openning/closing the sidebar

  For small screens we also going to show only one post per row
*/
 
'use client';

import { sidebarStore } from "../../stores/sidebar.store";
import { sections } from "../../config";
import SidebarSectionItem from "./sidebar-section-item";
import { Section } from "../type/section";

export default function Sidebar() {
  const isOpen: boolean = sidebarStore((state) => state.isOpen);

  return (
    <div className={`h-screen bg-gray-100 border-r z-30 fixed md:w-64 transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform md:translate-x-0 duration-200 ease-in-out`}>
      <div className="w-full h-20 border-b flex px-4 items-center mb-8">
        <p className="font-semibold text-3xl text-blue-400 pl-4">Next sample</p>
      </div>  
      { 
        sections.map((section: Section) => (
          <div key={section.name} className="mb-4 px-4">
            <p className="pl-4 text-sm font-semibold mb-1">{ section.name }</p>
            { 
              section.items.map((item: any) => (
                <SidebarSectionItem key={section.name + '_' +item.name} item={item}/>
              )) 
            }
          </div>
          )
        ) 
      }
    </div>
  );
}
