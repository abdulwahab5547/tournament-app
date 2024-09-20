import TeamName from './teamname'

interface MarkTeamsProps {
    closeOverlay: () => void; 
  }

const MarkTeams: React.FC<MarkTeamsProps> = ({ closeOverlay }) => {
    return(
        <div className="flex flex-col gap-5 px-12 py-10 items-center">
            <div className='bg-active h-full px-8 overflow-y-auto rounded-2xl pb-8 mb-2'>
                <div className='flex flex-col gap-3 max-h-96 py-5'>
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
            <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                Done
            </button>
            <button onClick={closeOverlay} className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                Cancel
            </button>
        </div>
    )
}

export default MarkTeams; 