import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex items-center px-24 py-12 h-48 w-full bg-dGray bg-opacity-20 shadow-xl justify-between text-white flex-col md:flex-row">
            <h1 className="opacity-70">&copy; 2022 www.eusurvival.com <br></br></h1>
            <ul className="flex gap-4">
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><Link to="/">Home</Link></li>
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><a href="https://bans.eusurvival.com/">Bans</a></li>
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><Link to="/rules">Rules</Link></li>
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><Link to="/vote">Vote</Link></li>
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><a href="https://discord.com/invite/VyGufepXDf">Discord</a></li>
            </ul>
        </div>
    )
};
export default Footer;