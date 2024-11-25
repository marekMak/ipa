import texture from '../assets/images/texture.png'

const Mouthfeel = () => {
  return (
    <div className='h-100 w-screen flex justify-center'>
        <h1
            className='bg-baseRed uppercase leading-none text-[6rem] sm:text-[6rem] md:text-[20rem] font-anton text-left bg-cover pt-16'
            style={{ backgroundImage: `url(${texture})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
            }}>
            Mouthfeel
            </h1>
    </div> 
  )
}

export default Mouthfeel