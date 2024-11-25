import React from 'react'

type Props = {}

import texture from './assets/images/texture.png'
import Button from './components/Button'

const India = (props: Props) => {
  return (
    <div className='min-h-96 w-screen flex flex-col items-center md:flex-row relative py-10'>
        <div className='flex-1 flex flex-col items-start justify-center pl-10'>
        <p className='font-dancing font-bold text-xl'>unlimited release</p>
        <h1
            className='bg-black uppercase leading-none text-9xl font-anton text-left bg-cover py-4'
            style={{ backgroundImage: `url(${texture})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
            }}>
            India< br/> Pale Ale
            </h1>
        <p className='w-[80vw] md:max-w-[32rem] text-justify mb-5'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, officia error? Totam unde nulla ea repudiandae, corporis optio recusandae repellat asperiores minima voluptate soluta laboriosam debitis architecto quaerat fugiat nostrum aliquam. Minima ratione sequi omnis ipsa beatae ab odio id ad, voluptates fuga incidunt nisi. 
        </p>
        <Button buttonText='Buy now!' color='black'/>
        </div>
        <div className='flex-1 flex justify-center p-10'>
            <div className='flex-1 font-noto max-w-96 h-100 px-10 py-4 shadow-xl flex flex-col justify-center items-start outline outline-2'>
              <div>
                <h1 className='font-bold'>ABV</h1>
                <p className='text-slate-500 font-bold'>Alcohol by volume</p>
              </div>
              <div className='border-t-[3px] border-black my-[4px] w-80 flex'>
                <h1 className='text-5xl font-bold pr-3'>6.2 <span className='text-2xl'>%</span></h1>
                <p className='text-xs ml-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Debitis mollitia corporis facere ullam hic tempore unde quaerat quisquam </p>
              </div>

              <div>
                <h1 className='font-bold'>IBU</h1>
                <p className='text-slate-500 font-bold'>Isn't Reservation Units</p>
              </div>
              <div className='border-t-[3px] border-black my-[4px] w-80 flex'>
                <h1 className='text-5xl font-bold pr-3'>51 <span className='text-2xl'>.1</span></h1>
                <p className='text-xs ml-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Debitis mollitia corporis facere ullam hic tempore unde quaerat quisquam </p>
              </div>

              <div>
                <h1 className='font-bold'>ABV</h1>
                <p className='text-slate-500 font-bold'>Alcohole by valume</p>
              </div>
              <div className='border-t-[3px] border-black my-[4px] w-80 flex'>
              <h1 className='text-5xl font-bold pr-3'>6.2 <span className='text-2xl'>%</span></h1>
                <p className='text-xs ml-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Debitis mollitia corporis facere ullam hic tempore unde quaerat quisquam </p>
              </div>

            </div>
        </div>
    </div>
  )
}

export default India