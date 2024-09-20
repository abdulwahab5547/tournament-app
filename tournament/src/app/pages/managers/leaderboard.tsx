
import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import PlayerScoreLeaderboard from '@/app/components/playerscoreleaderboard';

function LeaderBoard(){
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative orange-yellow-gradient w-[52%] h-[60%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex gap-3 flex-col justify-center overflow-y-auto pt-14 pb-4'>
                    <div>
                        <p className='text-3xl font-bold text-center'>Leader Board</p>
                    </div>
                    <div className='py-4 flex flex-col overflow-y-auto gap-5 px-3'>
                        <PlayerScoreLeaderboard/>
                        <PlayerScoreLeaderboard/>
                        <PlayerScoreLeaderboard/>
                        <PlayerScoreLeaderboard/>
                        <PlayerScoreLeaderboard/>
                        <PlayerScoreLeaderboard/>
                        <PlayerScoreLeaderboard/>
                        <PlayerScoreLeaderboard/>
                    </div>
                    
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

export default LeaderBoard;