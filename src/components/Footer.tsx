import texture from '../assets/images/texture.png';

const Footer = () => {
  return (
    <div className='w-screen min-h-[50vh] mt-5 py-10 bg-baseRed'
    style={{
        backgroundImage: `url(${texture})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  )
}

export default Footer