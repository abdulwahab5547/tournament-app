import ButtonLeft from "@/app/components/btnleft";
import ButtonRight from "@/app/components/btnright";

function IntroVideo(){
    return(
        <div className="relative h-screen flex flex-col items-center justify-center text-white">
            <div className="pb-10">
                <p className="text-6xl font-bold shadow-">Watch Video To Continue</p>
            </div>
            <div className="border-8 border-stone-900 bg-white w-[70%] h-[70%] flex justify-center items-center">
                <div className="rounded-full bg-orange w-20 h-20 flex justify-center items-center">
                    <i className="fa-solid fa-play text-white text-5xl pl-1"></i>
                </div>
            </div>

            <div className='absolute bottom-10 left-10'>
                <ButtonLeft/>
            </div>
            <div className='absolute bottom-10 right-10'>
                <ButtonRight/>
            </div>
        </div> 
    )
}

export default IntroVideo;