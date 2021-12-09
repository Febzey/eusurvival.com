const Footer = () => {
    return (
        <div className="flex items-center px-24 py-8 h-64 w-full bg-dGray bg-opacity-20 shadow-xl justify-between text-white flex-col md:flex-row">
            
            <h1 className="opacity-70">&copy; 2021 www.eusurvival.com <br></br> Made with ❤️ by: <a href="https://febzey.com" className="text-yellow-300 underline duration-300 ease-in hover:text-blue-400" target="_blank">Febzey#1854</a></h1>

            <ul className="flex gap-4">
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><a href="/">Home</a></li>
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><a href="/">Bans</a></li>
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><a href="/rules">Rules</a></li>
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><a href="/vote">Vote</a></li>
                <li className="opacity-90 underline duration-200 ease-in hover:text-yellow-300"><a href="/">Discord</a></li>
            </ul>

            <a href="https://www.digitalocean.com/?refcode=3087d67745ad&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge" /></a>
        </div>
    )
};

export default Footer;
