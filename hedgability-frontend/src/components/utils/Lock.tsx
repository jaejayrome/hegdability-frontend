import { FaLock } from "react-icons/fa";

interface Props {
    theme: string
}

const Lock = (props: Props) => {
   return <>
    <div className="w-full h-screen flex items-center justify-center overflow-y-hidden"> 
        <div className="flex flex-col justify-center items-center p-4">

            <div>
                <FaLock className="text-4xl" />
            </div>

            <div className="text-center"> 
                <span className="font-bold text-4xl"> In Progress </span>
                <span className="block font-light text-3xl"> 
                    <span className="flex flex-row justify-center space-x-2 items-center">
                        <div className="text-left bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-3xl"> 
                            <span className="text-transparent">
                                {props.theme}
                            </span>
                        </div> 

                        <span> 
                            to be released on Demo Day
                        </span>
                    </span> 
                            
                    </span>
            </div>
        </div>
    </div>
   </> 
}

export default Lock;