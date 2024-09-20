import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import ResultScore from '@/app/components/resultscore';
import { ResultScoreYellow } from '@/app/components/resultscore';

function IndividualScore(){

    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-darkBlue bg-opacity-70 shadow-2xl w-[52%] h-[68%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex justify-center items-center pt-12 pb-3'>
                    <p className='text-4xl font-bold'>Individual Score</p>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pt-3 pb-8 overflow-y-auto mt-2 mb-1'>
                    <ResultScore/>
                    <ResultScoreYellow/>
                    <ResultScore/>
                    <ResultScoreYellow/>
                    <ResultScore/>
                    <ResultScoreYellow/>
                    <ResultScore/>
                    <ResultScoreYellow/>
                    <ResultScore/>
                    <ResultScoreYellow/>
                    <ResultScore/>
                    <ResultScoreYellow/>
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

export default IndividualScore;