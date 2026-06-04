import MarrakechMap from '@/components/newPages/fmwl/MarrakechMap'
import OberoiSection from '@/components/newPages/fmwl/OberoiSection'
import VenueHero from '@/components/newPages/fmwl/VenueHero'
import HeroSectionVenue from '@/components/newPages/venu/HeroSectionVenue'
import VenueGallery from '@/components/newPages/venu/VenueGallery'
import WeddingVenue from '@/components/newPages/venu/WeddingVenue'
import React from 'react'



const page = () => {


   const slideImg2 = [
     "/img/home/image2.png",
    "/elements/S1.png",
    "/elements/S2.png",
    "/elements/S3.png",
    
  ];

   const slideImg1 = [
     "/elements/A1.png",
    "/elements/A2.png",
    "/elements/A3.png",
    
  ];

  return (
    <>
    <div className='w-full h-fit overflow-x-hidden bg-[#EFC7A9] relative'>

      {/* <VenueHero /> */}
      <HeroSectionVenue/>
      <WeddingVenue/>
      {/* <MarrakechMap /> */}
      <VenueGallery slideImg={slideImg2} STA1Txt={'The Oberoi'} STA2Txt={'Marrakech'} />
      <VenueGallery slideImg={slideImg1} STA1Txt={'Marrakech'} STA2Txt={', Morocco'} />
      {/* <OberoiSection /> */}
    </div>
    </>
  )
}

export default page
