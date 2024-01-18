import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { CodeBlock, dracula } from "react-code-blocks";

const DocsScreen = () => {
    const requestBody = "{\n\t''tokenPair'': ''USDC-ETH'',\n\t''amt'': 100000,\n\t''horizon'': 5,\n}";
    const respBody = "{\n\t''strategy'': {\n\t\t''delivery_price'': 1700,\n\t\t''osqth_amt'': 11.35,\n\t\t ''type'': ''perpertual''\n\t} \n}";
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1500)
    }, [])

    const sequence = [
        'Integration Starts from here',
        1000
    ]

    return <>
        <div className="w-full min-h-screen h-fit">
            {!isLoading ? 
            <div className="animate-pulse flex flex-col items-center justify-center mt-10">
                <div className="bg-gradient-to-t from-green-200 from-20% to-green-400 to-100% text-transparent w-fit text-3xl sm:text-6xl font-bold px-2 py-2 rounded-md mb-10"> 
                    <span className="text-transparent">
                            Documentation
                    </span>
                </div>
                <div className="bg-gradient-to-t from-green-200 from-20% to-green-400 to-100% text-transparent"> 
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex-1 ">
                        </div>

                        <div className="flex-1">
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="bg-gradient-to-t from-green-400 from-10% to-green-800 to-100% bg-clip-text w-fit text-3xl sm:text-5xl font-light font-mono px-2 mb-10"> 
                    <span className="text-transparent">
                            Documentation
                    </span>

                    <div className="font-sans font-normal text-2xl flex items-center justify-center text-slate-600">
                        <TypeAnimation
                        sequence={sequence}
                        wrapper="span"
                        speed={60}
                        deletionSpeed={60}
                        />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                        <div className="bg-white rounded-lg px-4 py-2">
                            <div className="flex flex-col items-start justify-center space-y-4">

                                <div className="flex flex-row items-center justify-center text-black space-x-4">
                                    <div className="font-semibold text-2xl">Get Hedging Strategy </div>
                                    <div className="flex flex-row items-center justify-center space-x-3">
                                        <div className="rounded-md py-1 px-2 bg-green-700 text-white text-sm"> GET </div>
                                        <div className="rounded-md py-1 px-2 bg-green-400 text-white text-sm"> /hedgingStrat </div>
                                    </div>
                                </div>

                                <div className="flex flex-col font-light text-xl space-y-2">
                                    <div className="text-xl">
                                        Request 
                                    </div>

                                    <div className="text-black bg-slate-200 text-sm rounded-md break-words px-2">
                                        <span className=""> Sends to model that predictors of the liquidity provider </span>
                                    </div>

                                    <div className="flex flex-row text-center space-x-2 text-xs">
                                        <div className="rounded-sm bg-purple-900 text-white font-semibold px-1 py-1">
                                            tokenPair
                                        </div>

                                        <div className="rounded-sm bg-white text-gray-700 font-semibold px-1 py-1">
                                            string
                                        </div>

                                        <div className="rounded-sm text-red-400 py-1 px-1">
                                            Required
                                        </div>
                                    </div>
                                    
                                    <div className="text-black text-sm">
                                        <span className="">Example: </span>
                                        <span className="italic"> USDC-ETH </span>
                                    </div>

                                    <div className="flex flex-row text-center space-x-2 text-xs">
                                        <div className="rounded-sm bg-purple-900 text-white font-semibold px-1 py-1">
                                            amount
                                        </div>

                                        <div className="rounded-sm bg-white text-gray-700 font-semibold px-1 py-1">
                                            int
                                        </div>

                                        <div className="rounded-sm text-red-400 py-1 px-1">
                                            Required
                                        </div>
                                    </div>
                                    
                                    <div className="text-black text-sm">
                                        <span className="">Example: </span>
                                        <span className="italic"> 100000 </span>
                                    </div>

                                    <div className="flex flex-row text-center space-x-2 text-xs">
                                        <div className="rounded-sm bg-purple-900 text-white font-semibold px-1 py-1">
                                            horizon
                                        </div>

                                        <div className="rounded-sm bg-white text-gray-700 font-semibold px-1 py-1">
                                            int
                                        </div>

                                        <div className="rounded-sm text-red-400 py-1 px-1">
                                            Required
                                        </div>
                                    </div>
                                    
                                    <div className="text-black text-sm">
                                        <span className="">Example: </span>
                                        <span className="italic"> 5 </span>
                                    </div>
                                </div>

                                <div className="flex flex-col font-light text-xl space-y-2">
                                    <div className="text-xl">
                                        Response
                                    </div>

                                    <div className="text-black bg-slate-200 text-sm rounded-md break-words px-2">
                                        <span className=""> Receives a 'Strategy' object that contains the individual option contracts and their respective strike prices </span>
                                    </div>

                                    <div className="flex flex-row text-center space-x-2 text-xs">
                                        <div className="rounded-sm bg-purple-900 text-white font-semibold px-1 py-1">
                                            strategy
                                        </div>

                                        <div className="rounded-sm bg-white text-gray-700 font-semibold px-1 py-1">
                                            object
                                        </div>

                                        <div className="rounded-sm text-green-600 py-1 px-1 font-bold">
                                            200
                                        </div>
                                    </div>

                                    <div className="flex flex-row text-center space-x-2 text-xs">
                                        <div className="rounded-sm bg-purple-900 text-white font-semibold px-1 py-1">
                                            error
                                        </div>

                                        <div className="rounded-sm bg-white text-gray-700 font-semibold px-1 py-1">
                                            error
                                        </div>

                                        <div className="rounded-sm text-red-600 py-1 px-1 font-bold">
                                            404
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex bg-green-800 rounded-lg px-4 py-2">
                            <div className="flex-1 flex-col items-center justify-center">
                                <div>
                                    <span className="font-semibold text-white"> Example Request </span>
                                </div>

                                <CodeBlock
                                    text={requestBody}
                                    language="javascript"
                                    showLineNumbers
                                    theme={dracula}
                                />

                                <div>
                                    <span className="font-semibold text-white"> Example Body </span>
                                </div>

                                <CodeBlock
                                    text={respBody}
                                    language="javascript"
                                    showLineNumbers
                                    theme={dracula}
                                />
                            </div>
                        </div>
                    </div>
            </div>
            }
        </div>
    </>
}

export default DocsScreen;