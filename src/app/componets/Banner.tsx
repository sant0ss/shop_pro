import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function Banner({ images }){
    return(
        <div className="bg-white">
            <Carousel 
                showArrows={false} 
                showStatus={false} 
                showIndicators={true} 
                showThumbs={false}
                autoPlay={true}
                interval={4000}
                infiniteLoop={true}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <Image src={image.src} className="w-full md:h-176 h-128 object-cover object-center"/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}