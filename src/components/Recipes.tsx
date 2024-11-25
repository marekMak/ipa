import poster from '../assets/images/DTH_ProgramBanner.jpg'
import Button from './Button'

const Recipes = () => {
  return (
    <div className='w-screen min-h-[50vh] px-20  grid grid-cols-1 md:grid-cols-2 pb-10'>
      <div className='flex justify-center'>
        <img src={poster} alt='DTH program poster' className='object-cover min-w-80 md:w-full h-full' />
      </div>
      <div className='flex flex-col px-10'>
        <h1 className='text-3xl font-bold font-noto'>Recipes</h1>
        <h1 className='text-7xl font-bold font-anton uppercase my-5'>Beer Speaks.</h1>
        <h1 className='text-7xl font-bold font-anton uppercase mb-5'>Bellies</h1>
        <h1 className='text-7xl font-bold font-anton uppercase mb-5'>Grumble.</h1>
        <p className='font-light text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores saepe, ex magnam temporibus repellendus nobis doloremque voluptates quis ad fugit rem similique, porro, neque voluptate numquam quae? Repudiandae, ratione!</p>
        <Button buttonText='read more' color='black' />
      </div>
    </div>
  )
}

export default Recipes