import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import icon from "../assets/img/eicon_head_1.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import NavigationLinks from './NavigationLinks'


function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>

      <nav>
        <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">

                {/* Ada's Team Home Icon */}
                <div className="flex-shrink-0 mt-4">
                    <a href="/">
                        <img id="home-icon" src={icon} alt="adas-team-icon"
                            className="inline float-left" />
                        <h4 
                            className=
                                "inline float-right my-5 mx-3 invisible md:visible"
                        >
                            ADA'S TEAM
                        </h4>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:inline-block">
                        <NavigationLinks />
                </div>
            </div>
            
            {/* Mobile/Tablet Navigation Menu */}
            <div className="-mr-2 flex lg:hidden">
                <span className="text-xl p-3">
                 <FontAwesomeIcon 
                     icon={faBars}
                     onClick={() => setIsOpen(!isOpen)}
                     aria-controls="mobile-menu"
                     aria-expanded="false"/>

                </span>

            </div>
          </div>
        </div>

        {/* Open hamburger menu animation */}
        <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} 
                className="px-2 pt-2 pb-3 space-y-4 sm:px-3 
                            bg-black text-white hover:">
                  <NavigationLinks />
              </div>
            </div>
          )}
        </Transition>

      </nav>

    </div>
  );
}

export default Nav;