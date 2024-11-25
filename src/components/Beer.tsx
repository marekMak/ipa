import beerGlass from '../assets/images/LittleSumpin_MasonJar_Photo-671x1024.png'
import greenBg from '../assets/images/Green-LSS.png'
import blackBg from '../assets/images/splat-black.png'

const Beer = () => {
  return (
    <div id="beerSection" className='px-20 pt-30 min-h-[100vh] w-screen relative'>
        <img src={beerGlass} alt='jar beer glass' className='absolute top-[65%] left-[25%] md:left-[20%] z-50 -rotate-12 object-cover h-[14rem] md:h-[22rem] -translate-x-[50%] -translate-y-[50%]' />
        <div className='absolute flex flex-col items-center justify-start pt-10 max-w-96 h-96 text-center'>  
            <img src={greenBg} alt='green texture bg' className='w-[150%] z-10 absolute top-1/2 left-[40%] -translate-x-[50%] -translate-y-[50%]'/>
            <h1 className="text-xl text-white font-bold font-noto z-20">Tropical</h1>
            <p className='text-center text-white max-w-[40%] text-sm z-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio iusto exercitationem labore nulla atque temporibus beatae?</p>
        </div>

        <div className='absolute top-[30%] left-[30%] flex flex-col items-center justify-start pt-10 max-w-96 h-96 text-center'>  
            <img src={greenBg} alt='green texture bg' className='w-[150%] z-10 absolute top-1/2 left-[40%] -translate-x-[50%] -translate-y-[50%]'/>
            <h1 className="text-xl text-white font-bold font-noto z-20">Pink</h1>
            <p className='text-center text-white max-w-[40%] text-sm z-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio iusto exercitationem labore nulla atque temporibus beatae?</p>
        </div>

        <div className='absolute top-[25%] left-[70%] flex flex-col items-center justify-start pt-10 max-w-96 h-96 text-center'>  
            <img src={blackBg} alt='green texture bg' className='w-[150%] z-10 absolute top-1/2 left-[40%] -translate-x-[50%] -translate-y-[50%]'/>
            <h1 className="text-xl text-white font-bold font-noto z-20">Caramel Malt</h1>
            <p className='text-center text-white max-w-[40%] text-sm z-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio iusto exercitationem labore nulla atque temporibus beatae?</p>
        </div>
    </div>
  )
}

export default Beer