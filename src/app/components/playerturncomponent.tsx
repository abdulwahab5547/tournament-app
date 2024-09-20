function PlayerScore(){
    return(
        <div className="flex items-center justify-between gap-5">
            
            <div className="bg-white border-gray-500 py-1 flex justify-between items-center px-5 w-72 rounded-2xl shadow-xl">
                <div>
                    <p className="text-red-700 font-bold text-xl py-2">Team-X Name</p>
                </div>
                <div>
                    <i className="fa-solid fa-pen-to-square text-red-700 text-xl"></i>
                </div>
            </div>

            <div className="bg-white border-gray-500 py-1 flex justify-center items-center px-7 w-12 rounded-2xl shadow-xl">
                <p className="text-lightYellow text-xl font-bold py-2"><i className="fa-solid fa-check"></i></p>
            </div>

            <div className="bg-white border-gray-500 py-1 flex justify-center items-center px-7 w-12 rounded-2xl shadow-xl">
                <p className="text-lightYellow text-xl font-bold py-2"><i className="fa-solid fa-check"></i></p>
            </div>

            <div className="bg-white border-gray-500 py-1 flex justify-center items-center px-7 w-12 rounded-2xl shadow-xl">
                <p className="text-lightYellow text-xl font-bold py-2"><i className="fa-solid fa-check"></i></p>
            </div>

            <div className="bg-white border-gray-500 py-1 flex justify-center items-center px-7 w-12 rounded-2xl shadow-xl">
                <p className="text-lightYellow text-xl font-bold py-2"><i className="fa-solid fa-check"></i></p>
            </div>
        </div>
    )
}

export default PlayerScore; 