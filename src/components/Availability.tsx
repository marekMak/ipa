import blackIpa from '../assets/images/image1.png'
import maximus from '../assets/images/image2.png'
import daytime from '../assets/images/image3.png'
import cluster from '../assets/images/image4.png'

const Availability = () => {
  return (
    <div className='py-10 min-h-[50vh] w-screen flex flex-col items-center'>
        <h1 className='text-6xl md:text-8xl font-noto mb-8 md:mb-36'>Availability</h1>


        <div className='py-10 px-10 w-screen min-h-[20vh] font-noto grid grid-cols-2 md:grid-cols-5'>
          
          <div className='flex flex-col items-center'> 
            <img src={blackIpa} className='h-44 md:h-96'/>
            <h1 className='font-dancing text-2xl'>On top</h1>
          </div>

          <div className='flex flex-col justify-center items-center text-center'> 
            <img src={maximus} className='-rotate-[15deg] h-44 md:h-96'/>
            <h1 className='mr-16 font-dancing text-2xl'>22 oz Bottles</h1>
          </div>

          <div className='flex flex-col justify-center items-center relative'> 
            <h1 className='absolute bottom-0 font-dancing text-2xl'>22 oz Bottles</h1>
          </div>

          <div className='flex flex-col justify-center items-center text-center'> 
            <img src={daytime} className='-rotate-[15deg] h-44 md:h-96'/>
            <h1 className='mr-8 font-dancing font-bold text-2xl'>22 oz Bottles</h1>
          </div>

          <div className='flex flex-col justify-center items-center text-center'> 
            <img src={cluster} className='-rotate-[15deg] h-44 md:h-96'/>
            <h1 className='mr-8 font-dancing text-2xl'>33 oz Bottles</h1>
          </div>

        </div>
    </div>
  )
}

export default Availability