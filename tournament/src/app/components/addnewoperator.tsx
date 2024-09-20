interface AddNewOperatorProps {
    closeOverlay: () => void; 
  }

const AddNewOperator: React.FC<AddNewOperatorProps> = ({ closeOverlay }) => {
    return(
        <div className="flex flex-col gap-5 px-12 py-10 items-center">
            <div className="pb-5">
                <input
                    placeholder="Enter Operator Name"
                    className="text-center text-xl text-orange py-3 w-80 rounded-xl"
            />
            </div>
            <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                Send Code
            </button>
            <button onClick={closeOverlay} className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                Cancel
            </button>
        </div>
    )
}

export default AddNewOperator; 