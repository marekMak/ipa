import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

type Props = {}

import Header from './components/Header';
import bottle from './assets/images/ipa.png';
import texture from './assets/images/texture.png';
import dogo from './assets/images/dogimage.png';


gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = (props: Props) => {

  useGSAP(()=>{ 


    let t1 = gsap.timeline();

    gsap.set("#bottle", {
      x: "-50%", // Translate on the X axis
      y: "-50%", // Translate on the Y axis
    });


    t1.from("#dogo", {
      opacity: 0,
      duration: 1,
      scale: 0.1,
    });

    gsap.to("#bottle", {
      rotate: -15,
      scale: 0.68,
      scrollTrigger: {
        trigger: "#bottle",
        start: "top 5%",
        end: "top -479%",
        scrub: true,
        pin: true
      },
      ease: "power2.inOut"  // Smoothens the animation
    });


  },[]);

  return (
    <div className='h-screen w-screen relative' id="main">
      <Header/>
      <h1
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-baseRed text-baseRed uppercase leading-none text-[6rem] md:text-13vw font-anton text-center bg-cover'
        style={{
          backgroundImage: `url(${texture})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        unlimited release
      </h1>
      <img src={bottle} id="bottle" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] z-60' alt="bottle ipa Lagunitas"/>
      <img src={dogo} id="dogo" className='absolute top-[20%] left-[36%] -translate-x-1/2 -translate-y-1/2 h-[6rem] -rotate-45' alt="dogo" />
    </div>
  );
}

export default Hero;
