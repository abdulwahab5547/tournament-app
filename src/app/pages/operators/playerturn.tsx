
import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import PlayerTurnComponent from '@/app/components/playerturncomponent';

function PlayerTurn(){
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-orangeBG w-[54%] h-[63%] flex flex-col justify-center items-center rounded-xl pb-3 pt-7">
                <div className='pb-12'>
                    <p className='text-5xl font-bold'>Team-X Name</p>
                </div>
                <div className='flex gap-8 flex-wrap pb-3'>
                    <div className='w-72 pl-2'>
                        <p className='text-sm'>Player name</p>
                    </div>
                    <div className='w-12'>
                        <p className='text-xs'>Turn-1</p>
                    </div>
                    <div className='w-12'>
                        <p className='text-xs'>Turn-2</p>
                    </div>
                    <div className='w-12'>
                        <p className='text-xs'>Turn-3</p>
                    </div>
                    <div className='w-12'>
                        <p className='text-xs'>Turn-4</p>
                    </div>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pb-4'>
                    <PlayerTurnComponent/>
                    <PlayerTurnComponent/>
                    <PlayerTurnComponent/>
                    <PlayerTurnComponent/>
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

export default PlayerTurn;