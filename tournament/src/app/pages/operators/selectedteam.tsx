
import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import PlayerScore from '@/app/components/playerscore';

function SelectedTeam(){
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-orangeBG w-[55%] h-[70%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='pb-8 pt-5'>
                    <p className='text-5xl font-bold'>Team-X Name</p>
                </div>
                <div className='flex gap-8 flex-wrap pb-3'>
                    <div className='w-72 pl-2'>
                        <p className='text-sm'>Player name</p>
                    </div>
                    <div className='w-12'>
                        <p className='text-xs'>Score-1</p>
                    </div>
                    <div className='w-12'>
                        <p className='text-xs'>Score-2</p>
                    </div>
                    <div className='w-12'>
                        <p className='text-xs'>Score-3</p>
                    </div>
                    <div className='w-12'>
                        <p className='text-xs'>Score-4</p>
                    </div>
                    <div className='w-12'>
                        <p className='text-xs'>Total</p>
                    </div>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pb-4'>
                    <PlayerScore/>
                    <PlayerScore/>
                    <PlayerScore/>
                    <PlayerScore/>
                </div>
                <div className='flex justify-between pt-8 w-[75%]'>
                    <div className='w-[50%] text-right'>
                        <button className='py-2 shadow-lg w-48 font-bold text-xl rounded-3xl bg-darkOrange border border-gray-700'>Player Turn</button>
                    </div>
                    <div className='w-[50%] flex justify-end items-center gap-5'>
                        <p className='font-bold'>Team total:</p>
                        <div className='bg-lightYellow rounded-xl flex items-center justify-center w-32 py-2'>
                            <p className='text-2xl font-bold'>0000</p>
                        </div>
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

export default SelectedTeam;