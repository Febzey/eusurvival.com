import vote from '../../images/vote.png';
const VoteContent = () => {
    return (
        <div className="h-auto bg-opacity-70 mt-48 flex items-center justify-center flex-col">

            <div className="font-bebas text-6xl ml-auto mr-auto mb-20 flex flex-col items-center gap-20 px-10 text-center">
                <h1 className="text-white opacity-90 flex flex-row items-center gap-5">Vote to help us grow :)<img src={vote} alt="vote" height="88" width="88" className="hidden md:block"/></h1>

            
                <h1 className="text-white text-2xl opacity-90 text-center">Scroll down to see rewards!</h1>

            </div>

            <div className="flex flex-col flex-wrap pt-0 pb-32 px-12 bg-dGray w-full md:w-2/3 rounded bg-opacity-20 shadow-2xl items-center">
                <h1 className="text-white py-11 font-bebas text-3xl underline opacity-80 tracking-widest">Links</h1>
                <div className="flex flex-col gap-10 items-center">
                    <a href="https://minecraft-server-list.com/server/479308/vote/" target="_blank" className="duration-300 hover:bg-yellow-500 ease-in-out  text-white border-2 border-yellow-500 w-full py-5 px-5 text-center text-lg uppercase font-bold rounded">minecraft-server-list.com</a>
                    <a href="https://www.trackyserver.com/server/eusurvival-1113266" target="_blank" className="duration-300 hover:bg-blue-500 ease-in-out  text-white border-2 border-blue-500 w-full py-5 px-5 text-center text-lg uppercase font-bold rounded">trackyserver.com</a>
                    <a href="https://minecraft-server.net/vote/EUSurvival/" target="_blank" className="duration-300 hover:bg-red-500 ease-in-out  text-white border-2 border-red-500 w-full py-5 px-5 text-center text-lg uppercase font-bold rounded">Minecraft-server.net</a>
                    <a href="https://www.planetminecraft.com/server/eusurvival/vote/" target="_blank" className="duration-300 hover:bg-green-500 ease-in-out  text-white border-2 border-green-500 w-full py-5 px-5 text-center text-lg uppercase font-bold rounded">planetminecraft.net</a>
                    <a href="https://minecraft-mp.com/server/289848/vote/" target="_blank" className="duration-300 hover:bg-indigo-500 ease-in-out  text-white border-2 border-indigo-500 w-full py-5 px-5 text-center text-lg uppercase font-bold rounded">minecraft-mp.com</a>
                    <a href="https://topminecraftservers.org/vote/19164" target="_blank" className="duration-300 hover:bg-pink-500 ease-in-out  text-white border-2 border-pink-500 w-full py-5 px-5 text-center text-lg uppercase font-bold rounded">topminecraftservers.org</a>

                </div>


            </div>

        </div>
    )
};

export default VoteContent;
