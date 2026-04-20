import React from 'react'

const LastSection = () => {
  return (
     <div className='w-full h-svh  BG_Primary'>
      <div className='w-full h-full overflow-hidden relative'>
        <img src={`/img/home/lastIMG.jpg`} alt="IMG" className='w-full h-full object-cover object-center ' />

        <div className=' absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
            <h1 className='Font_Header Text_Primary_Color_White text-[10vw] leading-[10vw] text-center'> We Look Forward <br/> To Seeing You !</h1>
        </div>
        
      </div>
    </div>
  )
}

export default LastSection
