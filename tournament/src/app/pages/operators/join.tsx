import Image from 'next/image'
import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'

function Join(){
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-orangeBG w-[52%] h-[52%] flex flex-col justify-center items-center rounded-xl">
                <p className='text-4xl font-bold text-center'>Enter 3 Digit Code<br/>to Join</p>
                <div className='w-96 pt-5'>
                    <input type="text"
                        className='w-20 mx-5 border-b-2 bg-inherit focus:outline-none text-4xl text-center'
                    />
                    <input type="text"
                        className='w-20 mx-5 border-b-2 bg-inherit focus:outline-none text-4xl text-center'
                    />
                    <input type="text"
                        className='w-20 mx-5 border-b-2 bg-inherit focus:outline-none text-4xl text-center'
                    />
                </div>
                <div className='pt-10 '>
                    <button className='py-1 shadow-lg px-12 font-bold text-2xl rounded-3xl bg-darkOrange border border-gray-700'>Join</button>
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

export default Join;