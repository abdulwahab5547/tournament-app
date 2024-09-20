import Image from 'next/image'
import Ball from '../../assets/ball.png'
import PhoneButtonLeft from '@/app/components/phonebtnleft'
import PhoneButtonRight from '@/app/components/phonebtnright'
import AvatarItem from '@/app/components/avataritem'

function AvatarSelection(){
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
            <div className='h-[70%] pb-2 w-[80%] max-w-72 bg-orangeBG rounded-2xl mt-10 border-2 border-regBorder'>
                <div className='relative h-full flex flex-col items-center justify-center'>
                    <div className='px-3 py-2 pt-4 h-full overflow-y-auto'> 
                        <AvatarItem/>
                        <AvatarItem/>
                        <AvatarItem/>
                        <AvatarItem/>
                        <AvatarItem/>

                        <AvatarItem/>
                        <AvatarItem/>
                        <AvatarItem/>
                        <AvatarItem/>
                        <AvatarItem/>

                        <AvatarItem/>
                        <AvatarItem/>
                        <AvatarItem/>
                        <AvatarItem/>
                        <AvatarItem/>
                    </div>
                    <div className='absolute -top-7'>
                        <div className='w-fit flex justify-center'>
                            <p className="bg-lightYellow text-2xl font-bold p-1 px-3 rounded-xl shadow-xl">
                                Avatar List
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

export default AvatarSelection;