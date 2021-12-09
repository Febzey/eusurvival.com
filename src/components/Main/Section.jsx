
import { useState } from 'react';
import { FaTimes, FaTiktok, FaReddit, FaYoutube, FaInstagram, FaWikipediaW } from 'react-icons/fa';


const Section = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>

            <div className="h-72 w-full bg-gray-700  flex flex-row items-center justify-center md:justify-evenly flex-wrap">

                <div className="flex flex-col">
                    <h1 className="text-gray-100 font-bold text-2xl mb-2 ml-auto mr-auto">Start Playing!</h1>
                    <div className="flex flex-row">
                        <div className="bg-white py-5 px-9 text-xl font-bebas tracking-wider text-gray-600">EUSURVIVAL.COM</div>
                        <button className="group bg-yellow-500 py-5 px-5 font-permMarker text-white tracking-wide text-xl duration-200 ease-in-out transform hover:-translate-1 hover:scale-110 hover: cursor-pointer active:bg-yellow-700" onClick={() => { navigator.clipboard.writeText("eusurvival.com"), setShowModal(true) }}>copy.</button>
                    </div>

                </div>

                <div>
                    <h1></h1>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl opacity-90 text-white mr-auto ml-auto mb-2">Check out our socials</h1>
                    <div className="flex flex-row text-white text-6xl gap-3 flex-wrap">
                        <a href="https://www.tiktok.com/@eusurvivalmc"><FaTiktok className="duration-300 ease-out transform hover:-translate-1 hover:scale-125 hover:text-indigo-500 cursor-pointer" /></a>
                        <a href="https://eusurvival.fandom.com/wiki/EuSurvival_Wiki"><FaReddit className="duration-300 ease-out transform hover:-translate-1 hover:scale-125 hover:text-yellow-500 cursor-pointer" /></a>
                        <a href="https://www.youtube.com/channel/UCJP3udBQemy1qjItVoiyNhA"><FaYoutube className="duration-300 ease-out transform hover:-translate-1 hover:scale-125 hover:text-red-600 cursor-pointer" /></a>
                        {/* <a href="/"><FaInstagram className="duration-300 ease-out transform hover:-translate-1 hover:scale-125 hover:text-blue-400 cursor-pointer" /></a> */}
                        <a href="https://eusurvival.fandom.com/wiki/EuSurvival_Wiki"><FaWikipediaW className="duration-300 ease-out transform hover:-translate-1 hover:scale-125 hover:text-gray-400 cursor-pointer" /></a>
                    </div>


                </div>

            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="relative p-6 flex items-center flex-row">
                                    <p className="pr-4">Copied Successfully. Enjoy playing :D</p><FaTimes className="text-xl hover: cursor-pointer duration-200 ease-in-out transform hover:-translate-1 hover:scale-125" onClick={() => { setShowModal(false) }} />
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )
                : (
                    null
                )}
        </>
    )
}

export default Section;