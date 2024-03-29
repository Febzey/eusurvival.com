import React from 'react'
import image1 from "../../../images/slide1.png";
import image2 from "../../../images/slide2.png";
import image3 from "../../../images/slide3.png";
import image4 from "../../../images/slide4.png";
import image5 from "../../../images/slide5.png";
import image6 from "../../../images/slide6.png";
import image7 from "../../../images/chronos.png";
import image8 from "../../../images/twisted1.png";
import image9 from "../../../images/twisted2.png";
import ImageSlider from './Slider';

const Banner = () => {
    return (
        <>
            <div>
                <ImageSlider images={[image1,image2,image3,image4,image5,image6,image7,image8,image9]}>

                    <div className="flex flex-col items-center w-64 md:w-auto">

                        <h1 className="text-5xl font-bold font-bebas tracking-wider text-gray-50">Welcome to EuSurvival.com</h1>

                        <p className="text-lg text-gray-50 font-Quicksand ">The <span className="font-bold">BEST</span> Europe based Minecraft 1.19 Anarchy server</p>

                        <div className="flex md:flex-row flex-col items-center mt-6 gap-5">
                            <a href="/rules" className="transition bg-yellow-500 py-3 rounded text-xl font-bold w-36 text-center tracking-widest font-Fredoka text-white duration-700 ease-in-out transform hover:bg-opacity-80 hover:-translate-y-1 hover:scale-110">Rules</a>
                            <a href="/vote"  className="transition bg-yellow-500 py-3 rounded text-xl font-bold w-36 text-center tracking-widest font-Fredoka text-white duration-700 ease-in-out transform hover:bg-opacity-80 hover:-translate-y-1 hover:scale-110">Vote</a>
                            <a href="https://eusurvival.tebex.io/" target="_blank" className="transition bg-yellow-500 py-3 rounded text-xl font-bold w-36 text-center tracking-widest font-Fredoka text-white duration-700 ease-in-out transform hover:bg-opacity-80 hover:-translate-y-1 hover:scale-110">Donate</a>
                        </div>

                    </div>

                </ImageSlider>
            </div>
        </>
    )

};

export default Banner;
