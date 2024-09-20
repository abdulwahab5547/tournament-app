import RegisteredTeam from "@/app/components/registeredteam";

function DuringRegistration(){
    return(
        <div>
            <div className="text-white">
                <div className="flex justify-center pt-10">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl max-w-96">
                        <p className="text-4xl font-bold">Tournament Name</p>
                    </div>
                </div>
                <div className="pt-3">
                    <p className="text-center font-bold text-3xl">Registered Teams</p>
                </div>
            </div>

            <div>
                <RegisteredTeam/>
                <RegisteredTeam/>
            </div>
        </div>
    )
}

export default DuringRegistration;