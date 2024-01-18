import { TypeAnimation } from "react-type-animation";
import {useFloating, autoUpdate} from '@floating-ui/react';
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowLeftRightFill } from "react-icons/ri";
import Ethereum from "../../assets/ethereum-eth-logo.svg";
import USDC from "../../assets/usd-coin-usdc-logo.svg";
import { Input, InputGroup, InputLeftAddon, InputRightAddon} from "@chakra-ui/react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const sequence = [
    'Choose Your Configuration to Begin',
    1000
]
const PlaygroundScreen = () => {
    const [isLoading, setLoading] = useState(false);
    const [chosen, setChosen] = useState(false);
    const [amt, setAmt] = useState(0.00);
    const [days, setDays] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const onSetAmt = (event: any) => {
        setAmt(event.target.value);
    }

    const onSetDays = (event: any) => {
        setDays(event.target.value);
    }

    const onPairChosen = () => {
        setChosen(!chosen);
        toast("Selected: ETH-USDC!");
    }

    const {refs, floatingStyles} = useFloating({
        whileElementsMounted: autoUpdate,
        open: isOpen,
        });


    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1500)
    }, [])


    return <>
        <div className="w-full h-screen">
            {!isLoading ? 
            <div className="animate-pulse flex flex-col items-center justify-center my-4 mt-10">
                <div className="bg-gradient-to-t from-pink-200 from-30% to-pink-400 to-100% text-transparent w-fit text-3xl sm:text-6xl font-bold px-2 py-2 rounded-md"> 
                    <span className="text-transparent">
                        Playground
                    </span>
                </div>
                <div className="flex-col bg-gradient-to-t from-pink-200 from-20% to-pink-400 to-100% text-transparent my-8 px-8 rounded-lg">
                    <div className="flex-2 px-4 py-2 items-center justify-center">
                        <div className="text-transparent">
                            1. Choose <span className="text-transparent"> Uniswap V3 </span> Token Pair
                        </div>

                        <div className="flex items-center justify-center">
                            <button ref={refs.setReference} onClick = {() => setIsOpen(!isOpen)} className="px-4 py-2 bg-gradient-to-t from-pink-200 from-20% to-pink-400 rounded-md text-transparent">
                                <div className="flex flex-row items-center justify-center px-2">
                                    <span className="text-sm text-transparent"> Show Options </span>
                                    <span className="text-xl"> <IoMdArrowDropdown /> </span>
                                </div>
                                
                            </button>
                        </div>
                    </div>

                    <div className="flex-2 flex-col px-4 py-2 items-center justify-center space-y-4 my-4">
                        <div className="text-transparent">
                                2. Enter <span className="text-transparent"> Liquidity </span> Amount
                                <div>
                                    <InputGroup className="">
                                        <InputLeftAddon className="bg-gradient-to-t from-pink-200 from-20% to-pink-400 px-4">
                                        $
                                        </InputLeftAddon>
                                        <Input placeholder=''className="text-black px-2" onChange={onSetAmt}/>
                                    </InputGroup>
                                </div>
                        </div>

                        <div className="text-transparent">
                                3. Enter Investment <span className="text-transparent"> Horizon </span>
                                <div>
                                    <InputGroup className="">
                                        <Input placeholder=''className="text-black px-2" onChange={onSetDays}/>
                                        <InputRightAddon className="bg-gradient-to-t from-pink-200 from-20% to-pink-400 px-4">
                                        Days
                                        </InputRightAddon>
                                    </InputGroup>
                                </div>
                        </div>


                        <div className="text-transparent">
                                <div className="w-full flex items-center justify-center">
                                    <button className="bg-gradient-to-t from-pink-200 from-20% to-pink-400 border-2 rounded-lg px-2 py-1">
                                        Submit
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div> :
            <div className="flex flex-col w-full justify-center items-center mt-10">
                <div className="text-transparent bg-gradient-to-t from-pink-300 from-30% to-pink-800 to-100% bg-clip-text w-fit text-3xl sm:text-5xl font-light font-mono px-2">
                    <span className="text-transparent">
                            Playground
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

                <div className="flex-col bg-slate-700 my-8 sm:px-8 px-0 rounded-lg">
                    <div className="flex-2 px-4 py-2 items-center justify-center">
                        <div className="text-white">
                            1. Choose <span className="text-pink-200"> Uniswap V3 </span> Token Pair
                        </div>

                        <div className="flex items-center justify-center">
                            <button ref={refs.setReference} onClick = {() => setIsOpen(!isOpen)} className="px-4 py-2 bg-slate-200 rounded-md text-slate-500">
                                <div className="flex flex-row items-center justify-center px-2">
                                    <span className="text-sm"> Show Options </span>
                                    <span className="text-xl"> <IoMdArrowDropdown /> </span>
                                </div>
                                
                            </button>
                        </div>

                        {isOpen && <div ref = {refs.setFloating} className="mt-4">
                            <div className="text-white"> 
                                <span className="text-pink-200"> Select </span> Token Pair
                            </div>
                            <div className="flex flex-col items-center justify-center bg-white overflow-y-auto rounded-sm overflow-x-hidden">
                                <button onClick={onPairChosen} className={`w-full py-2 ${chosen ? 'bg-pink-200': ''}`}>
                                    <div className="flex flex-row justify-evenly items-center">
                                        <img src={Ethereum} className="w-[30px] h-[30px]"/>
                                        <RiArrowLeftRightFill className="text-2xl text-slate-400"/>
                                        <img src={USDC} className="w-[30px] h-[30px]"/>
                                    </div>
                                </button>
                            </div>
                        </div>}
                    </div>

                    <div className="flex-2 flex-col px-4 py-2 items-center justify-center space-y-4">
                        <div className="text-white">
                                2. Enter <span className="text-pink-200"> Liquidity </span> Amount
                                <div>
                                    <InputGroup className="">
                                        <InputLeftAddon className="bg-slate-400 px-4">
                                        $
                                        </InputLeftAddon>
                                        <Input placeholder=''className="text-black px-2" onChange={onSetAmt}/>
                                    </InputGroup>
                                </div>
                        </div>

                        <div className="text-white">
                                3. Enter Investment <span className="text-pink-200"> Horizon </span>
                                <div>
                                    <InputGroup className="">
                                        <Input placeholder=''className="text-black px-2" onChange={onSetDays}/>
                                        <InputRightAddon className="bg-slate-400 px-4">
                                        Days
                                        </InputRightAddon>
                                    </InputGroup>
                                </div>
                        </div>


                        <div className="text-white">
                                <div className="w-full flex items-center justify-center">
                                    <button className="border-pink-200 border-2 rounded-lg px-2 py-1" disabled>
                                        Submit
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    </>
}

export default PlaygroundScreen;