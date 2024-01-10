import { Code, CodeBlock, dracula } from "react-code-blocks";


const toRender = "Provide Liquidity Providers an Everyday Hedging Strategy to combat Impermanent Loss.\n Exclusive to UniSwapV3 with the use of backtested and sophisticated machine learning models";

const Aim = () => {
    return <>
        <div className="flex flex-col items-center justify-center my-10">
            <div className="font-bold text-3xl"> 
                Our Aim
            </div>

            <div className="py-4 px-8 rounded-lg mt-2"> 
                <CodeBlock
                    text={toRender}
                    language="javascript"
                    showLineNumbers
                    theme={dracula}
                />
            </div>
        </div>

    </>
}

export default Aim;