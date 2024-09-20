import Image from 'next/image'
import Ball from '../../assets/ball.png'

function Players(){
    return(
        <div className="h-screen flex items-center justify-center text-white">
            <div className="-rotate-6 text-8xl font-extrabold uppercase flex flex-col items-center">
                <p className="">Tournament</p>
                <div className='flex gap-5'>
                    <Image src={Ball} width={150} alt='' className=''/>
                    <p className='pt-2 '>App</p>
                </div>
            </div>
        </div>
        
    )
}

export default Players; 