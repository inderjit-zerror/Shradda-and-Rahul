'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Destiny = () => {

    useEffect(() => {
        const TLD = gsap.timeline({
            scrollTrigger: {
                trigger: '.Destiny_cont',
                start: 'top top',
                end: 'top -20%',
                scrub: true,
                // markers: true
            }
        })
      
        gsap.to('.SecondInnerContDestiny', {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.SecondInnerContDestiny',
                start: 'top 70%',
                end: 'top 40%',
                scrub: true,
                // markers: true
            }
        })

    }, [])

    useGSAP(() => {

      
        gsap.from('.T2T2T', {
            yPercent: 20,
            opacity: 0,
            stagger: {
                each: 1,
                ease: 'none'
            },
            ease: 'none',
            scrollTrigger: {
                trigger: '.innderDestinyCont',
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
                // markers: true
            }
        })
        gsap.from('.TT2T', {
            yPercent: 20,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.TT2T',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // markers: true
            }
        })
        gsap.from('.TT3T', {
            yPercent: 5,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.TT3T',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // markers: true
            }
        })

    }, [])

    return (
        <div className='w-full h-fit Destiny_cont relative p-10 max-sm:px-[10px] '>

            {/* Bg */}
            <img src={`/img/home/lastIMG.jpg`} className='w-full h-full object-cover object-center fixed top-0 left-0  z-[-1]' alt="BG-IMG" />

            <div className='w-full h-fit bg-[#EFC7A9] flex flex-col px-[5vw] innderDestinyCont opacity-100 mt-[0vh] max-sm:pt-[3vh] max-sm:pt-0 '>
                <div className='w-full h-full px-[10vw] max-sm:px-3 pt-[10vw] max-sm:pb-[10vw] flex flex-col gap-[0.2rem]  '>
                    <div className='w-full h-fit flex justify-center T2T2T items-center'> <span className='F1 uppercase text-[1rem] COLOR_TEXT_RED font-semibold '>Sharadda and Rahul Story:</span></div>
                    {/* <img src={`/svgs/Title1Destiny.svg`} className='w-full T2T2T object-cover' alt="SVG" /> */}

                    <div className='w-full h-fit flex justify-center gap-[2vw] items-center COLOR_TEXT_RED'>
                        <h1 className='F1 uppercase text-[8vw] leading-[8vw] max-sm:text-[10vw]'>United</h1>
                        <h1 className='F2 text-[8vw] leading-[8vw]'>by</h1>
                        <h1 className='F1 uppercase text-[8vw] leading-[8vw] max-sm:text-[10vw]'>Destiny</h1>
                    </div>
                </div>

                <div className='w-full h-fit flex mt-[5vw]  TT2T COLOR_TEXT_RED gap-[2rem] max-sm:gap-[20px] max-sm:flex-col'>
                    <div className='w-1/2  max-sm:w-full mx-auto   text-center max-sm:text-justify max-sm:pr-0'>
                        <p className='F2'> It all began at a graduation party, where Sonal was busy charming the room when Kush walked in, caught one glimpse of her, and instantly knew he had to meet her. What followed was an unforgettable night filled with poker, laughter, and undeniable chemistry. They played their cards right (literally), won a little money, and unknowingly placed the biggest bet of all - on each other.
                            <br></br>
                            <br></br>
                            For a year, they stayed in touch, their connection never fading. Then fate stepped in. Sonal moved to New York City, and when Kush reached out, he discovered she was living just a ten minute walk from his apartment. Some call it destiny, some call it great real estate planning, but either way, their first date was pure magic. 
                        </p>
                    </div>
                   
                </div>



                <div className='w-full h-fit flex max-sm:flex-col mt-[5vw] mb-[4vh] max-sm:mb-[8vh] gap-[5vw] relative  will-change-transform '>

                    
                    <div className='w-full relative z-20 DCD2 mb-[10vh] max-sm:mb-0 '>
                        <div className='w-full h-auto'>
                            {/* aspect-[2/2] */}
                            <img src={`/img/home/lastIMG.jpg`} className='w-full  max-sm:aspect-auto object-center object-cover  z-20 ' alt="IMG" />
                        </div>
                    </div>


                 
                </div>
              
            </div>



        </div>
    )
}

export default Destiny