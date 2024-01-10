import { Code, CodeBlock, dracula } from "react-code-blocks";


const toRender = "Utilise Backtested Machine Learning Models tested and trained in curation for particular pools in UniswapV3.\n Hello";

const Aim = () => {
    return <>
        <div className="flex flex-col items-center justify-center my-20">
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