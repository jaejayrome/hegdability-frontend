import Logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from 'react-icons/gi';
import {useFloating, autoUpdate} from '@floating-ui/react';
import NavModal from "./NavModal";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {refs} = useFloating({
        whileElementsMounted: autoUpdate,
        open: isOpen,
        });

    return <>
        <div ref={refs.setReference} className="flex flex-row items-center justify-between px-2"> 
            <div> 
                <img src={Logo} alt="" className="h-[40px] w-[40px]" />
            </div>

            <div  className=""> 
                <button onClick = {onOpen}>
                    <GiHamburgerMenu className = "text-2xl"/>
                </button>
            </div>
        </div>

        
        <NavModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        

    </>
}

export default Navbar;