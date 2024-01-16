import { TypeAnimation } from "react-type-animation";
import { GiSpanner } from "react-icons/gi";
import { SiEasyeda } from "react-icons/si";
import Team from "./TeamScreen";
import Aim from "../utils/AIm";

const sequence = [
    'join the hedge',
    1000,
    'become a hedginator',
    1000,
    'use the api',
    1000
]

const HomeScreen = () => {
    return (
        <>
        <div className="w-full max-h-screen flex flex-col md:flex-row md:space-y-0 space-y-16 my-10 mx-4 items-center justify-around">
            {/* Title Section */}
            <div className="flex-1 flex justify-center items-center">
                <div className="flex-column text-left"> 
                    <div className="font-bold sm:text-4xl md:text-6xl text-3xl font-mono my-8"> Hedgability </div>
                    <div className = "my-0"> 
                        <span className="text-xl font-mono">invites you to</span>            
                    </div>
                    <div className="my-0 font-mono "> 
                        <TypeAnimation
                        sequence={sequence}
                        wrapper="span"
                        speed={50}
                        deletionSpeed={50}
                        repeat={Infinity}
                        className="text-2xl text-black shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="flex-1 flex items-center justify-center px-2"> 
                <div className="rounded-lg bg-gray-100 px-12 py-6"> 
                    <div className="text-black">
                        <div className="mb-4"> 
                            <span className="font-bold ">Hedgability's API in action</span>
                        </div>
                        <div className=""> 
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="flex flex-col items-center justify-center">
                                    <GiSpanner />
                                    <span> Automated Training </span>
                                    {/* <div className="flex flex-col items-center justify-center"> 
                                        <span> Hedgability trains a customised machine learning model in accordance to your requirements as a liquidity provider.</span>
                                        <span> Your Model is trained at the time of request which ensures that data used is the most updated in the market </span>
                                    </div> */}
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <SiEasyeda />
                                    <span> Seamless Integration </span>
                                    <div className="flex flex-col items-center justify-center"> 
                                        {/* <span> Hedgability trains a customised machine learning model in accordance to your requirements as a liquidity provider.</span>
                                        <span> Your Model is trained at the time of request which ensures that data used is the most updated in the market </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Team Section */}
        <Aim/>

        {/* Team Section */}
        <Team />
        </>
    )
}

export default HomeScreen;