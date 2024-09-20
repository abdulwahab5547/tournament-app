"use client"

import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import OperatorName from '@/app/components/operatorname';
import Overlay from '@/app/components/overlay';
import { useState } from 'react';
import AddNewOperator from '@/app/components/addnewoperator';


function OperatorControl(){
    const [isAddOverlayVisible, setAddOverlayVisible] = useState<boolean>(false);

    const openAddOverlay = () => setAddOverlayVisible(true);
    const closeAddOverlay = () => setAddOverlayVisible(false);
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative orange-yellow-gradient w-[52%] h-[60%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex justify-center items-center pt-14 pb-10'>
                    <p className='text-4xl font-bold'>Operator Control</p>
                </div>
                <div className='flex gap-8 flex-wrap justify-center overflow-y-auto pt-4 pb-8'>
                    <OperatorName/>
                    <OperatorName/>
                    <OperatorName/>
                </div>
                <div className='pt-8'>
                    <button onClick={openAddOverlay} className='bg-darkOrange shadow-xl text-xl py-4 font-bold w-72 px-2 rounded-full '>
                        Add New
                    </button>
                    <Overlay isVisible={isAddOverlayVisible} onClose={closeAddOverlay}>
                        <AddNewOperator closeOverlay={closeAddOverlay}/>
                    </Overlay>
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

export default OperatorControl;