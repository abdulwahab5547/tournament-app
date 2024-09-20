"use client"

import Overlay from "@/app/components/overlay";
import { useState } from 'react';
import RegControl from "@/app/components/regcontrol";
import Rename from "@/app/components/rename";
import MarkTeams from "@/app/components/markteams";

const Menu: React.FC = () => {

    const [isRegOverlayVisible, setRegOverlayVisible] = useState<boolean>(false);
    const [isRenameOverlayVisible, setRenameOverlayVisible] = useState<boolean>(false);
    const [isMarkOverlay, setMarkOverlay] = useState<boolean>(false);

    const openRegOverlay = () => setRegOverlayVisible(true);
    const closeRegOverlay = () => setRegOverlayVisible(false);

    const openRenameOverlay = () => setRenameOverlayVisible(true);
    const closeRenameOverlay = () => setRenameOverlayVisible(false);

    const openMarkOverlay = () => setMarkOverlay(true);
    const closeMarkOverlay = () => setMarkOverlay(false);


    return(
        <div className="h-screen flex flex-col items-center justify-center text-white">
            <div className="relative z-0 orange-yellow-gradient w-[52%] h-[58%] flex flex-col justify-center items-center rounded-xl pb-3 pt-4">
                <div className='flex gap-8 flex-wrap justify-center overflow-y-auto pt-14 pb-8'>
                    <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                        Registered Teams
                    </button>
                    <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                        Monitor Teams
                    </button>
                    <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                        Leader Board
                    </button>
                    <button onClick={openMarkOverlay} className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                        Mark Teams
                    </button>
                    <Overlay isVisible={isMarkOverlay} onClose={closeMarkOverlay}>
                        <MarkTeams closeOverlay={closeMarkOverlay}/>
                    </Overlay>
                    <button onClick={openRegOverlay} className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                        Reg Control
                    </button>
                    <Overlay isVisible={isRegOverlayVisible} onClose={closeRegOverlay}>
                        <RegControl closeOverlay={closeRegOverlay}/>
                    </Overlay>
                    <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                        Operator Control
                    </button>
                    <button onClick={openRenameOverlay} className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                        Rename Tournament
                    </button>
                    <Overlay isVisible={isRenameOverlayVisible} onClose={closeRenameOverlay}>
                        <Rename closeOverlay={closeRenameOverlay}/>
                    </Overlay>
                    <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                        Show Result
                    </button>
                    <button className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full '>
                        Final Four Teams
                    </button>
                </div>
                <div className="absolute -top-9 -z-10">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <p className="text-4xl font-bold">Tournament Name</p>
                    </div>
                </div>
                
            </div>
            
        </div> 
    )
}

export default Menu;