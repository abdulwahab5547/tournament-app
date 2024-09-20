
import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import TeamName from '@/app/components/teamname';

function MonitorTeams(){
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-orangeBG w-[60%] h-[60%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex gap-4 justify-center pt-14 pb-4 overflow-y-auto px-8'>
                    <div className='bg-active h-full px-8 overflow-y-auto rounded-2xl py-5'>
                        <p className='font-bold text-3xl pb-6 pt-3'>Active Teams</p>
                        <div className='flex flex-col gap-3'>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                        </div>
                        
                    </div>
                    <div className='bg-active h-full px-8 overflow-y-auto rounded-2xl py-5'>
                        <p className='font-bold text-3xl pb-6 pt-3'>Played Teams</p>
                        <div className='flex flex-col gap-3'>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
                            <TeamName/>
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

export default MonitorTeams;