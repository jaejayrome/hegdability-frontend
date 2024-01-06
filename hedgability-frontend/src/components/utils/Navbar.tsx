import Logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return <>
        <div className="flex flex-row items-center justify-between px-2"> 
            <div> 
                <img src={Logo} alt="" className="h-[40px] w-[40px]" />
            </div>

            <div> 
                <GiHamburgerMenu className = "text-2xl"/>
            </div>
        </div>
    </>
}

export default Navbar;