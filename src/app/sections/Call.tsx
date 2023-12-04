import React, { useState } from "react";
import Image from 'next/image'
import banner1 from '../images/call.jpg';
import banner2 from '../images/call2.jpg';
import banner3 from '../images/call6.jpg';
import banner4 from '../images/call4.jpg';
import banner5 from '../images/call5.jpg';
import banner6 from '../images/call7.jpg';
import Banner from '../componets/Banner'

const images = [
  {src: banner1},
  {src: banner2},
  {src: banner3},
  {src: banner4},
  {src: banner5},
  {src: banner6},
]


export default function Call(){
   return( 
    <div className="bg-white">
      <Banner images={images} />
    </div>
   )
}