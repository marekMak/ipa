import videoThumbnail from '../assets/images/youtube_image.jpg'

const VideoSection = () => {
  return (
    <div className='h-100 w-screen grid grid-cols-1 md:grid-cols-2 px-5 md:px-24 py-10'>
        <div className='flex-1 flex flex-col items-center text-center'>
            <a href="#" className='flex justify-center'><img className='w-[80%]' src={videoThumbnail} alt="youtube video picture about Lagunitas bear"/></a>
            <h1 className='font-bold font-noto pt-4 text-2xl md:text-4xl max-w-[36rem]'>Hear it from our beamonster jeremy marshall</h1>
        </div>
        <div className='flex-1 flex justify-center md:justify-end'>
            <div className='w-[80%] bg-white text-center md:text-left flex flex-col items-center mt-10 md:mt-0'>
                <h1 className='text-7xl font-bold font-noto uppercase'>Style</h1>
                <p className='text-justify py-5 w-72 md:w-96'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus explicabo doloribus.</p>
                <p className='text-justify w-72 md:w-96'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus explicabo doloribus.</p>
            </div>
        </div>
    </div>
  )
}

export default VideoSection