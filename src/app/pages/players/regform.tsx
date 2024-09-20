import Image from 'next/image'
import Ball from '../../assets/ball.png'
import PhoneButtonLeft from '@/app/components/phonebtnleft'
import PhoneButtonRight from '@/app/components/phonebtnright'

function RegistrationForm(){
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className='absolute top-4'>
                <div className="-rotate-6 text-lg font-extrabold uppercase flex flex-col items-center">
                    <p className="">Tournament</p>
                    <div className='flex gap-3'>
                        <Image src={Ball} width={30} height={30} alt='' className='shadow-2xl'/>
                        <p className=''>App</p>
                    </div>
                </div>
            </div>
            <div className='h-[70%] w-[80%] max-w-72 bg-orangeBG rounded-2xl mt-10 border-2 border-regBorder'>
                <form className='relative h-full flex flex-col items-center justify-center'>
                    <div className='py-3'>
                        <input
                            type='text'
                            placeholder='Enter Team Name'
                            className='rounded-lg py-2 px-3 w-48 font-bold'
                        />
                    </div>
                    <div className='py-3'>
                        <input
                            type='text'
                            placeholder='Enter Player-1 Name'
                            className='rounded-lg py-2 px-3 w-48 font-bold'
                        />
                    </div>
                    <div className='py-3'>
                        <input
                            type='text'
                            placeholder='Enter Player-2 Name'
                            className='rounded-lg py-2 px-3 w-48 font-bold'
                        />
                    </div>
                    <div className='py-3'>
                        <input
                            type='text'
                            placeholder='Enter Player-3 Name'
                            className='rounded-lg py-2 px-3 w-48 font-bold'
                            
                        />
                    </div>
                    <div className='py-3'>
                        <input
                            type='text'
                            placeholder='Enter Player-4 Name'
                            className='rounded-lg py-2 px-3 w-48 font-bold'
                        />
                    </div>
                    <div className='py-3'>
                        <input
                            type='text'
                            placeholder='Select Team Avatar'
                            className='rounded-lg py-2 px-3 w-48 font-bold'
                        />
                    </div>
                    <div className='absolute -top-7 '>
                        <div className='w-screen flex justify-center'>
                            <p className="bg-lightYellow text-2xl font-bold p-2 px-4 rounded-xl shadow-2xl">
                                Fill Form
                            </p>
                        </div>
                        
                    </div>
                    <div className='absolute -bottom-7'>
                        <div className='w-screen text-center'>
                            <button className="bg-lightYellow text-2xl font-bold p-2 px-4 rounded-xl shadow-2xl">
                                Submit
                            </button>    
                        </div>
                        
                    </div>
                </form>
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

export default RegistrationForm;