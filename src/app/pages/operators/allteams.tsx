
import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import TeamName from '@/app/components/teamname';

function AllTeams(){
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-orangeBG w-[52%] h-[52%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex gap-8 flex-wrap justify-center overflow-y-auto pt-14 pb-4'>
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
                    <TeamName/>
                    <TeamName/>
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

export default AllTeams;