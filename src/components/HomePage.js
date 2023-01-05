import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Lounge from '../photos/header/GAU_Socks_Banner_896x608_crop_center.webp'
import Funko from '../photos/header/GAU_HERO_FUNKO_896x608_crop_center.webp'
import Smile from '../photos/header/GAU_HERO_TEMPLATEsmile2_896x608_crop_center.webp'
import Retro from '../photos/header/GAU_HERO_TEMPLATEretro_896x608_crop_center.webp'

import HappyMealShirt from '../photos/products/41a073889c83e0cffb394b6ec87da526_1024x1024_2x_5554f737-28f5-48a2-ac01-56937267b644_608x608.webp'
import HappyMealShirtZoom from '../photos/products/d64a2975cb52e32af7c5ca8356e18a50_1024x1024_2x_4806d00f-53a4-46d8-921e-bcf923a07dc5_288x288.avif'



export function HomePage () {

const slides = [
    {
        image:Lounge,
        header:"Lounge in style.",
        text:"Shop the McDonald's Collection",
        button:"Shop Now",
    },
    {
        image:Funko,
        header:"Funko POP! Ad Icons",
        text:"Dive back in time to McDonaldland!",
        button:"Shop Now",
    },
    {
        image:Smile,
        header:"Grin and wear it!",
        text:"Shop our Happy Meal Collection",
        button:"Explore Now",
    },
    {
        image:Retro,
        header:"Throw it way back.",
        text:"Browse our Retro Collection",
        button:"Shop Now",
    },
    
]

const [currentSlide, setCurrentSlide] = useState(0)

const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length -1 : currentSlide -1;
    setCurrentSlide(newSlide);
}

const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length -1;
    const newSlide = isLastSlide ? 0 : currentSlide +1;
    setCurrentSlide(newSlide);
}

const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
}

    return (
        <>
            <div className="text-center">

                {/*======================================*/}
                {/*             Header static            */}
                {/*=====================================*/}
                {/* <div className="relative
                     [&>img]:h-[500px] [&>img]:w-full [&>img]:object-cover
                      ">
                    <img src={Lounge} alt='lounge.webp' />
                    <div className="absolute bottom-[82px] left-[50%] -translate-x-1/2">
                        <div className="font-bold text-[40px]">Lounge in style.</div>
                        <div className="text-[20px]">Shop the McDonald's Collection</div>
                        <Button className="-mb-12" variant="warning pb-3 pt-2" size="lg">Shop Now</Button>
                    </div>
                </div> */}



                {/* Header Slider w/ JS */}
                <div className="relative [&>img]:h-[600px] [&>img]:w-full [&>img]:object-cover ">

                    <img draggable="false" className=" select-none" src={slides[currentSlide].image} alt="image" />

                    <div className="absolute bottom-[82px] left-[50%] -translate-x-1/2 select-none">
                        <div className="font-bold text-[40px]">
                            {slides[currentSlide].header}
                        </div>
                        <div className="text-[20px]">
                            {slides[currentSlide].text}
                        </div>
                        <Button className="-mb-12" variant="warning pb-3 pt-2" size="lg">
                            {slides[currentSlide].button}
                        </Button>
                    </div>


                    <div
                        className="absolute top-[50%] hover:cursor-pointer -translate-y-1/2 rounded-full bg-white text-gray-500 p-2  hover:text-red-500 ml-4"
                        onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
                        </svg>
                    </div>

                    <div
                        className="absolute top-[50%] hover:cursor-pointer -translate-y-1/2 right-0 rounded-full bg-white p-2 text-gray-500  hover:text-red-500 mr-4"
                        onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                        </svg>
                    </div>

  

                </div>


                <div className="md:hidden flex top-4 justify-center py-2 [&>div]:-mr-8 last:[&>div]:mr-0 hover:cursor-pointer">
                    {slides.map((x, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="t">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                        </div>
                    ))}
                </div>


                {/*======================================*/}
                {/*             Featured Prodcuts        */}
                {/*       x < md                                          */}
                {/*  picture container = max full square                  */}
                {/*  description = __ x 60                                */}
                {/*                                                       */}
                {/*       x > md                                          */}
                {/*  pic container = max 270 x 270                        */}
                {/*  description = __ x 60                                */}
                {/*                                                      */}
                {/*     max:                                              */}
                {/*     1200 x 684 w/ some l r padding                    */}
                {/*                                                       */}
                {/*     flexbox                                                  */}
                {/*        - only padding between, not ouside flexbox                                               */}
                {/*                                                       */}
                {/*=====================================*/}
                <div className="ml-[30px] mr-[30px] ">

                    <p className="font-bold text-2xl pt-10 pb-10 -mr-10">
                        Featured Products
                    </p>

                    {/* flexbox Products */}
                    <div className="  
                    justify-between flex flex-wrap max-w-[1200px] m-auto
                        [&>div]:flex-[1_0_20%] [&>div]:min-w-[140px]
                    md:gap-x-[30px] gap-y-[78px] 
                        md:[&>div]:max-w-[270px]
                    max-md:gap-x-[20px] max-md:flex-[1_0_50%] 
                        max-md:[&>div]:flex-[0_0_47%] max-md:[&>div]:max-w-[600px] 
                    ">
                        {/*=======*/}
                        {/* Item1 */}
                        <div className="relative max-h-auto">
                            <div>
                                <img className="min-w-[140px]" src={HappyMealShirt} alt="Happy Meal shirt.jpg" />
                            </div>
                            <div className="relative -bottom-[8px]">
                                <div className="absolute left-0 font-semibold">
                                    Happy Meal T-Shirt
                                </div>
                                <div className="absolute right-0 text-gray-500">
                                    $20.00
                                </div>
                            </div>
                        </div>
                        {/*  END  */}
                        {/*=======*/}

                        <div className="relative max-h-[270px]">
                            <div>
                                <img className="min-w-[140px]" src={HappyMealShirt} alt="Happy Meal shirt.jpg" />
                            </div>
                            <div className="relative -bottom-[8px]">
                                <div className="absolute left-0 font-semibold">
                                    Happy Meal T-Shirt
                                </div>
                                <div className="absolute right-0 text-gray-500">
                                    $20.00
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div>
                                <img className="min-w-[140px]" src={HappyMealShirt} alt="Happy Meal shirt.jpg" />
                            </div>
                            <div className="relative -bottom-[8px]">
                                <div className="absolute left-0 font-semibold">
                                    Happy Meal T-Shirt
                                </div>
                                <div className="absolute right-0 text-gray-500">
                                    $20.00
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div>
                                <img className="min-w-[140px]" src={HappyMealShirt} alt="Happy Meal shirt.jpg" />
                            </div>
                            <div className="relative -bottom-[8px]">
                                <div className="absolute left-0 font-semibold">
                                    Happy Meal T-Shirt
                                </div>
                                <div className="absolute right-0 text-gray-500">
                                    $20.00
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div>
                                <img src={HappyMealShirt} alt="Happy Meal shirt.jpg" />
                            </div>
                            <div className="relative -bottom-[8px]">
                                <div className="absolute left-0 font-semibold">
                                    Happy Meal T-Shirt
                                </div>
                                <div className="absolute right-0 text-gray-500">
                                    $20.00
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div>
                                <img src={HappyMealShirt} alt="Happy Meal shirt.jpg" />
                            </div>
                            <div className="relative -bottom-[8px]">
                                <div className="absolute left-0 font-semibold">
                                    Happy Meal T-Shirt
                                </div>
                                <div className="absolute right-0 text-gray-500">
                                    $20.00
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div>
                                <img src={HappyMealShirt} alt="Happy Meal shirt.jpg" />
                            </div>
                            <div className="relative -bottom-[8px]">
                                <div className="absolute left-0 font-semibold">
                                    Happy Meal T-Shirt
                                </div>
                                <div className="absolute right-0 text-gray-500">
                                    $20.00
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div>
                                <img src={HappyMealShirt} alt="Happy Meal shirt.jpg" />
                            </div>
                            <div className="relative -bottom-[8px]">
                                <div className="absolute left-0 font-semibold">
                                    Happy Meal T-Shirt
                                </div>
                                <div className="absolute right-0 text-gray-500">
                                    $20.00
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


{/* bottom area */}
<div className="pt-40">
    
<p className="font-bold text-2xl pb-20">Contact us</p>

<form>
    <label>username</label>
    <input placeholder="Enter"/>
</form>

</div>

            </div>
        </>
    )
}