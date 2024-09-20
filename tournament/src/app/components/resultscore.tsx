function ResultScore(){
    return(
        <div className="flex items-center gap-3">  
            <div className="">
                <i className="fa-solid fa-medal text-2xl"></i>
            </div>
            
            <div className="rounded-full bg-orange py-2 shadow-xl">
                <p className="text-2xl font-bold px-3">01</p>
            </div>
            
            <div className="w-80 bg-orange py-2 rounded-full shadow-xl">
                <p className="text-2xl font-bold px-5">Player name</p>
            </div>

            <div className="rounded-full bg-orange py-2 shadow-xl">
                <p className="text-2xl font-bold px-5">000</p>
            </div>
        </div>
    )
}

export default ResultScore; 

function ResultScoreYellow(){
    return(
        <div className="flex items-center gap-3">  
            <div className="">
                <i className="fa-solid fa-medal text-2xl"></i>
            </div>
            
            <div className="rounded-full bg-lightYellow py-2 shadow-xl">
                <p className="text-2xl font-bold px-3">01</p>
            </div>
            
            <div className="w-80 bg-lightYellow py-2 rounded-full shadow-xl">
                <p className="text-2xl font-bold px-5">Player name</p>
            </div>

            <div className="rounded-full bg-lightYellow py-2 shadow-xl">
                <p className="text-2xl font-bold px-5">000</p>
            </div>
        </div>
    )
}

export { ResultScoreYellow };
