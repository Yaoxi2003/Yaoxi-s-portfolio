import buttons from '../assets/componentClasses/allClasses'
import {imageProfileDesktop, imageProfileTablet, imageProfileMobile} from '../assets//images/Img'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      className='container-pro relative'
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 2, 
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.7 }}
    >

      {/* background image */}
      <picture >
        <source media="(min-width: 600px)" srcSet={imageProfileTablet} />
        <source media='(min-width: 1024px)' srcSet={imageProfileDesktop} />
        <img src={imageProfileMobile} alt="Yaoxi's avatar" 
        className='object-cover max-w-[174px] max-h-[380px] 
          sm:max-w-full sm:max-h-[600px] lg:max-h-[720px]
          absolute top-0 right-1/2 translate-x-1/2 -z-20
          sm:right-0 sm:translate-x-0 lg:right-1/10'/>
      </picture>

        <div className='pt-80 sm:pt-26 lg:pt-38'>

          {/* content in hero */}
          <div className='flex flex-col items-center gap-8 sm:items-start
                text-center sm:text-left'>
            <h1 className='sm:max-w-[445px] lg:max-w-[800px] lg:text-[88px]'>Nice to meet you! I'm <span className='border-b-4 border-green500'>Yaoxi Yang</span>.</h1>
            <p className='sm:max-w-[445px]'>I bridge the gap between interaction design and frontend development, building accessible web apps that are as intuitive as they are functional.</p>
            <a className={buttons.linetransitionBtn.btn} href="#About">
              <p className={buttons.linetransitionBtn.text}>contact me</p>
            </a>
          </div>

        </div>
    </motion.section>
  )
}
