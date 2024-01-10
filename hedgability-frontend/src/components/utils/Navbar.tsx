import Logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState } from 'react';
import {useFloating, autoUpdate} from '@floating-ui/react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {refs, floatingStyles} = useFloating({
        whileElementsMounted: autoUpdate,
        open: isOpen,
        });

    return <>
        <div ref={refs.setReference} className="flex flex-row items-center justify-between px-2"> 
            <div> 
                <img src={Logo} alt="" className="h-[40px] w-[40px]" />
            </div>

            <div  className=""> 
                <button onClick = {() => setIsOpen(!isOpen)}>
                    <GiHamburgerMenu className = "text-2xl"/>
                </button>
            </div>
        </div>

        {isOpen &&
            <div ref = {refs.setFloating} className="my-4"> 
                <div className="">
                    <div className="grid grid-cols-2 sm:grid-cols-4 text-md break-overflow text-center font-mono underline">
                        <Link to="/" className="transform hover:scale-110 hover:text-gray-500"> Home </Link>
                        <Link to="/design" className="transform hover:scale-110 hover:text-gray-500"> Design</Link>
                        <Link to="/playground" className="transform hover:scale-110 hover:text-gray-500"> Playground </Link>
                        <Link to="/docs" className="transform hover:scale-110 hover:text-gray-500"> Docs </Link>
                    </div>
                </div>
                
            </div>
        }
    </>
}

export default Navbar;