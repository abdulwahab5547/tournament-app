interface RegControlProps {
    closeOverlay: () => void; 
  }

const RegControl: React.FC<RegControlProps> = ({ closeOverlay }) => {
    return(
        <div className="flex flex-col gap-5 px-12 py-10">
            <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                Open Registration
            </button>
            <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                Close Registration
            </button>
            <button onClick={closeOverlay} className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                Cancel
            </button>
        </div>
    )
}

export default RegControl; 