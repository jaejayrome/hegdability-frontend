import Lock from "../utils/Lock";
import { useState, useEffect} from "react";
import { TypeAnimation } from "react-type-animation";

const sequence = [
    'Building Blocks of Hedgability',
    1000
]

const ArchitectureScreen = () => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1500)
    }, [])
    
    return <>
        <div className="w-full h-screen">
            {!isLoading ?
                <div className="animate-pulse flex flex-col items-center justify-center mt-10">
                    <div className="bg-gradient-to-t from-blue-200 from-30% to-blue-400 to-100% text-transparent w-fit text-6xl font-bold px-2 py-2 rounded-md"> 
                        <span className="text-transparent">
                            Design
                        </span>
                    </div>
                </div>
            : 
            <div className="flex flex-col w-full justify-center items-center mt-10">
                <div className="text-transparent bg-gradient-to-t from-blue-300 from-30% to-blue-800 to-100% bg-clip-text w-fit text-5xl font-light font-mono px-2">
                    <span className="text-transparent">
                            Design
                    </span>

                    <div className="font-sans font-normal text-2xl flex items-center justify-center text-slate-600">
                        <TypeAnimation
                        sequence={sequence}
                        wrapper="span"
                        speed={60}
                        deletionSpeed={60}
                        />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-evenly mt-4">
                    <div>
                        Hello
                    </div>

                    {/* Second Part of Architecture Explanation */}
                    <div className="bg-blue-800 rounded-md px-4 py-2">
                        <div className="flex flex-col items-center justify-around text-white">
                            {/* Stage 1 */}
                            <div>
                                <span className="text-lg">
                                    Stage 1
                                </span>
                            </div>

                            <div>
                                <span className="text-lg">
                                    Stage 2
                                </span>
                            </div>

                            <div>
                                <span className="text-lg">
                                    Stage 3
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>}
        </div>
    </>
}

export default ArchitectureScreen;