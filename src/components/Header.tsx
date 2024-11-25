import Logo from './Logo'
import Button from './Button'

const Header = () => {
  return (
    <header className='min-h-24 px-5 md:px-20 flex w-screen items-center justify-between fixed z-[90]'>
        <Logo/>
        <Button buttonText='buy beer' color='baseRed'/>
    </header>
  )
}

export default Header