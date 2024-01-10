import { TypeAnimation } from "react-type-animation";

const sequence = [
    'Choose Your Configuration to Begin',
    1000
]
const PlaygroundScreen = () => {


    return <>
        <div> 
            <div className="w-full">
                <div className=""> 
                    <TypeAnimation sequence={sequence} omitDeletionAnimation/>
                </div> 
                
            </div>
        </div>
    </>
}

export default PlaygroundScreen;