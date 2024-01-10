import { RiCopyrightFill } from "react-icons/ri"

const Footer = () => {
    return <>
        <div className="w-screen bg-gray-100 fixed bottom-0"> 
            <div className="flex flex-row justify-center gap-x-4 items-center py-2 text-sm"> 
                <div className="flex flex-row"> 
                    <span> Est. 2024</span>

                    <div className="flex flex-row items-center justify-center ml-7  font-light"> 
                        <RiCopyrightFill className="text-xl mr-1"/>
                        <span> Hedgability Team </span>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}

export default Footer;