'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="w-full text-gray-700 bg-white  shadow">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                    <Link href={'/'} className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg ">
                        Maysha-fashion
                    </Link>
                    <button
                        className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <nav
                    className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${isOpen ? 'flex' : 'hidden'
                        }`}
                >
                    <Link className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg  md:mt-0 hover:text-gray-900" href={'/product'}>
                        Products
                    </Link>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900" href="#">
                        Portfolio
                    </a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900" href="#">
                        About
                    </a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900" href="#">
                        Contact
                    </a>
                    <div className="relative">
                        <button
                            className="flex items-center w-full px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span>Dropdown</span>
                            <svg
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                className={`inline w-4 h-4 ml-1 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                                <div className="px-2 py-2 bg-white rounded-md shadow ">
                                    <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900" href="#">
                                        Link #1
                                    </a>
                                    <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900" href="#">
                                        Link #2
                                    </a>
                                    <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900" href="#">
                                        Link #3
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
