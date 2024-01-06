import { TypeAnimation } from "react-type-animation";

const sequence = [
    'Join the Hedge',
    1000,
    'Become a Hedginator',
    1000
]

const HomeScreen = () => {
    return (
    <div>
        {/* Title Section */}
        <div className="flex justify-center items-center my-4">
            <div className="flex-column text-left"> 
                <div className="font-bold text-4xl"> Hedgability </div>
                <div className = "my-0"> 
                    <span className="text-xl">invites you to</span>            
                </div>
                <div className="my-0 bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text"> 
                    <TypeAnimation
                    sequence={sequence}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={50}
                    repeat={Infinity}
                    className="text-2xl text-transparent"
                    />
                </div>
            </div>
        </div>

        {/* Features Section */}
        <div className="px-2"> 
            <div className="rounded-lg bg-gray-100"> 
                <div className="text-gray-600">
                    <span>TheHedge API in action</span>

                    <div className=""> 
                        <div className="grid grid-cols-3 gap-2">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeScreen;