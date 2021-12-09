import { FaDiscord, FaHome, FaQuestion, FaUserSlash, FaCheck, FaUserShield } from 'react-icons/fa';
const SideMenu = () => {
    return (
    <div className="fixed z-0 top-24 mr-auto bg-black bg-opacity-80 w-full duration-300 ease-in-out lg:hidden">
        <ul className="menu-list flex flex-col font-bebas text-2xl p-7">
            <li className="px-4 mb-4 text-gray-100 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-110"><FaHome /><a href="/">Home</a></li>
            <li className="px-4 mb-4 text-gray-100 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-110"><FaQuestion /><a href="/faq">Faq</a></li>
            <li className="px-4 mb-4 text-gray-100 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-110"><FaUserSlash /><a href="https://www.eusurvival.com/bans-/bans.php">Ban-List</a></li>
            <li className="px-4 mb-4 text-gray-100 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-110"><FaCheck /><a href="/vote">Vote</a></li>
            <li className="px-4 mb-4 text-gray-100 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-110"><FaUserShield /><a href="/rules">Rules</a></li>


            <li className="px-4 mb-4 text-gray-100 bg-discordblue rounded-sm p-2 flex flex-row items-center duration-200 ease-in-out opacity-90 transform motion-safe hover:opacity-100 hover:scale-110"><FaDiscord /><a href="/">Discord</a></li>
        </ul>
    </div>
    )
}

export default SideMenu;