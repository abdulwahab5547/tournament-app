import Image from 'next/image'
import Ball from '../../assets/ball.png'
import PhoneButtonLeft from '@/app/components/phonebtnleft'
import PhoneButtonRight from '@/app/components/phonebtnright'

function FinalLoading(){
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className='absolute top-5'>
                <div className="-rotate-6 text-lg font-extrabold uppercase flex flex-col items-center">
                    <p className="">Tournament</p>
                    <div className='flex gap-3'>
                        <Image src={Ball} width={30} height={30} alt='' className='shadow-2xl'/>
                        <p className=''>App</p>
                    </div>
                </div>
            </div>
            <div className='h-[70%] w-[80%] max-w-72 mt-10'>
                <div className='relative h-full flex flex-col items-center justify-center'>
                    
                    <div className='flex flex-col items-center'>
                        <div className='bg-white rounded-3xl px-8 py-1 border-2 border-gray-500'>
                            <p className='text-lightYellow font-bold text-2xl'>100%</p>
                        </div>
                        <div className='flex gap-1 pt-2'>
                            <div className='bg-white w-3 h-3 rounded-full border-2 border-gray-500'>
                            </div>
                            <div className='bg-white w-3 h-3 rounded-full border-2 border-gray-500'>
                            </div>
                            <div className='bg-white w-3 h-3 rounded-full border-2 border-gray-500'>
                            </div>
                        </div>
                    </div>


                    <div className='absolute -top-2'>
                        <div className='w-screen flex justify-center'>
                            <p className="bg-lightYellow text-center text-2xl font-bold p-1 px-4 rounded-xl shadow-xl">
                                <span>Tournament</span> <br/> <span>Name</span>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className='absolute bottom-4 left-4'>
                <PhoneButtonLeft/>
            </div>
            <div className='absolute bottom-4 right-4'>
                <PhoneButtonRight/>
            </div>
            
        </div> 
    )
}

export default FinalLoading;