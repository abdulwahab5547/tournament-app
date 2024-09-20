

import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import ResultScore from '@/app/components/resultscore';
import { ResultScoreYellow } from '@/app/components/resultscore';


function SubmitResult(){

    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-darkBlue bg-opacity-70 shadow-2xl w-[52%] h-[65%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex justify-center items-center pt-8 pb-3'>
                    <p className='text-4xl font-bold'>Personal Best</p>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pt-4 pb-8'>
                    <ResultScore/>
                    <ResultScoreYellow/>
                    <ResultScore/>
                    <ResultScoreYellow/>
                </div>
                <div className='pt-2'>
                    <button className='bg-darkOrange shadow-xl text-xl py-4 font-bold w-72 px-2 rounded-full '>
                        Submit Result
                    </button>
                </div>

                <div className="absolute -top-9">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <p className="text-4xl font-bold">Tournament Name</p>
                    </div>
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

export default SubmitResult;