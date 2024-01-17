import { useState, useEffect} from "react";
import { TypeAnimation } from "react-type-animation";
import Stage1 from "../../assets/Stage 1.png"
import Stage2 from "../../assets/Stage 2.png"
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

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
        <div className="w-full min-h-screen h-fit">
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
                <div className="flex flex-col justify-center items-center text-transparent bg-gradient-to-t from-blue-300 from-30% to-blue-800 to-100% bg-clip-text w-fit text-5xl font-light font-mono px-2">
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

                <div className="flex flex-col items-center justify-evenly mt-4">
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <div className="flex flex-col md:flex-row items-center justify-center">
                            <div className="min-w-[280px] max-w-[700px] h-3/4 mx-4 ">
                                <img src={Stage1} />
                            </div>

                            <div className="bg-blue-800 rounded-lg px-4 py-2 text-white text-[15px] md:text-lg"> 
                                Stage 1: Obtain Hedging Strategy For Following Week

                                <div className="mt-2 text-[10px] md:text-xs font-mono">
                                    <UnorderedList className="space-y-1">
                                        <ListItem> User Interacts Via Frontend / Hegdability API </ListItem>
                                        <ListItem> Hedgability Core Backend would transfer predictors to ML Pipeline </ListItem>
                                        <ListItem> ML Pipeline App would locally install the latest 14 days from central S3 Bucket </ListItem>
                                        <ListItem> ML Pipeline App would run the model, call APIs and formulate final hedging strategy </ListItem>
                                        <ListItem> Predictions display back to user </ListItem>
                                    </UnorderedList>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="min-w-[280px] max-w-[700px] h-3/4 mx-4 ">
                            <img src={Stage2} />
                        </div>
                        <div className="bg-blue-800 rounded-lg px-4 py-2 text-white text-[15px] md:text-lg"> 
                                Stage 2: Cron Job to Obtain the Latest 14 Day Data

                                <div className="mt-2 text-[10px] md:text-xs font-mono">
                                    <UnorderedList className="space-y-1">
                                        <ListItem> User Interacts Via Frontend / Hegdability API </ListItem>
                                        <ListItem> Hedgability Core Backend would transfer predictors to ML Pipeline </ListItem>
                                        <ListItem> ML Pipeline App would locally install the latest 14 days from central S3 Bucket </ListItem>
                                        <ListItem> ML Pipeline App would run the model, call APIs and formulate final hedging strategy </ListItem>
                                        <ListItem> Predictions display back to user </ListItem>
                                    </UnorderedList>
                                </div>
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