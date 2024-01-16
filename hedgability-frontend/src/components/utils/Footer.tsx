import { RiCopyrightFill } from "react-icons/ri"

interface Props {
    backgroundColor: string
}

const Footer = (props: Props) => {
    let backgroundColor = props.backgroundColor
    switch (true) {
        case props.backgroundColor.includes("white"):
        backgroundColor = "bg-gray-100";
        break;
        case props.backgroundColor.includes("green"):
            backgroundColor = "bg-green-400";
            break;
            case props.backgroundColor.includes("blue"):
            backgroundColor = "bg-blue-400";
            break;
            case props.backgroundColor.includes("pink"):
            backgroundColor = "bg-pink-400";
            break;
            default:
            backgroundColor = "bg-gray-600";
            break;
        }

    return <>
        <div className={`${backgroundColor} w-full fixed bottom-0`}> 
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