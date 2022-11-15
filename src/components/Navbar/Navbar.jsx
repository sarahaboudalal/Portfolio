import React from "react";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

export default function Navbar(){
    return(
        <div>
        <nav className="bg-darkGreen">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="https://flowbite.com" className="flex items-center">
                <span className="self-center hover:text-redish text-whitish font-poppins text-2xl font-bold">Sarah Abou Dalal</span>
            </a>
            <div className="flex items-center">
                <a href="tel:0096171557806" className="mr-6 text-sm font-medium hover:text-redish text-whitish"><BsFillTelephoneFill/></a>
                <a href="mailto:sarahaboudalal@gmail.com" className="text-sm font-medium hover:text-redish text-whitish"><MdEmail className="h-8 w-4"/></a>
            </div>
        </div>
    </nav>
    <nav className="bg-lightGreen">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <div className="flex items-center">
                <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li>
                        <a href="#" className="text-whitish hover:underline hover:text-darkGreen" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-whitish hover:underline hover:text-darkGreen">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-whitish hover:underline hover:text-darkGreen">Projects</a>
                    </li>
                    <li>
                        <a href="#" className="text-whitish hover:underline hover:text-darkGreen">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>

    )

}

// <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />