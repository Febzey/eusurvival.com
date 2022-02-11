import { FaTiktok, FaReddit, FaYoutube, FaInstagram, FaWikipediaW } from 'react-icons/fa';

const Socials = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl text-neutral-200 mr-auto ml-auto mb-2 font-Quicksand">Check out our socials</h1>
            <div className="flex flex-row text-white text-6xl gap-3 flex-wrap">
                <a href="https://www.tiktok.com/@eusurvivalmc"><FaTiktok className="duration-300 ease-out transform hover:-translate-1 hover:scale-125 hover:text-indigo-500 cursor-pointer" /></a>
                <a href="https://eusurvival.fandom.com/wiki/EuSurvival_Wiki"><FaReddit className="duration-300 ease-out transform hover:-translate-1 hover:scale-125 hover:text-yellow-500 cursor-pointer" /></a>
                <a href="https://www.youtube.com/channel/UCJP3udBQemy1qjItVoiyNhA"><FaYoutube className="duration-300 ease-out transform hover:-translate-1 hover:scale-125 hover:text-red-600 cursor-pointer" /></a>
                <a href="https://eusurvival.fandom.com/wiki/EuSurvival_Wiki"><FaWikipediaW className="duration-300 ease-out transform hover:-translate-1 hover:scale-125 hover:text-gray-400 cursor-pointer" /></a>
            </div>
        </div>
    )

};
export default Socials;