import Image from 'next/image'
import Ball from '../../assets/ball.png'
import PhoneButtonLeft from '@/app/components/phonebtnleft'
import PhoneButtonRight from '@/app/components/phonebtnright'

function TeamRegistered(){
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
            <div className='h-[70%] w-[80%] max-w-72 bg-orangeBG rounded-2xl mt-10 border-2 border-regBorder'>
                <div className='relative h-full flex flex-col items-center justify-center'>
                    <div className='bg-white text-black px-3 py-3 w-52 rounded-2xl my-2'>
                        <div>
                            <p className='font-bold'>Team Name</p>    
                        </div>
                    </div>
                    <div className='bg-red-700 text-white px-3 py-2 w-52 rounded-2xl my-2'>
                        <div>
                            <p className='font-bold'>Player-1 Name</p>    
                        </div>
                    </div>
                    <div className='bg-green-700 text-white px-3 py-2 w-52 rounded-2xl my-2'>
                        <div>
                            <p className='font-bold'>Player-2 Name</p>    
                        </div>
                    </div>
                    <div className='bg-lightYellow text-white px-3 py-2 w-52 rounded-2xl my-2'>
                        <div>
                            <p className='font-bold'>Player-3 Name</p>    
                        </div>
                    </div>
                    <div className='bg-blue-800 text-white px-3 py-2 w-52 rounded-2xl my-2'>
                        <div>
                            <p className='font-bold'>Player-4 Name</p>    
                        </div>
                    </div>
                    <div className='absolute -top-7'>
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

export default TeamRegistered;