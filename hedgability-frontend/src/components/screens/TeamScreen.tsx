import Calista from "../../assets/Calista.jpeg"
import Sirui from "../../assets/Sirui.jpeg"
import Jerome from "../../assets/Jerome.jpeg"

const Team = () => {
    return (
        <div className="flex flex-col items-center justify-center ">

            <div className="font-bold text-3xl"> 
                Our Team
            </div>

            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-8"> 
                <div> 
                    <div className="flex flex-col items-center justify-center">
                        <div className="h-[150px] w-[150px] rounded-full p-2"> 
                            <img src={Calista} className="rounded-full"/>
                        </div>
                        <span> Calista </span>
                        <span> Y2 NUS BZA </span>
                        <span> Tech Lead  </span>
                    </div>
                </div>

                <div> 
                    <div className="flex flex-col items-center justify-center"> 
                        <div className="h-[150px] w-[150px] rounded-full p-2"> 
                            <img src={Jerome} className="rounded-full"/>
                        </div>
                            <span> Jerome </span>
                            <span> Y2 NUS CS </span>
                            <span> Full Stack Developer </span>
                        </div>
                </div>

                <div> 
                    <div className="flex flex-col items-center justify-center"> 
                        <div className="h-[150px] w-[150px] rounded-full p-2"> 
                            <img src={Sirui} className="rounded-full"/>
                        </div>
                        <span> Si Rui </span>
                        <span> Y2 NUS BZA </span>
                        <span> Machine Learning Engineer </span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Team;