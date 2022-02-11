const ServerStats = ({ players, msgs }) => {
    return (
        <div className="min-h-[30vh] flex flex-col gap-3 bg-zinc-800 bg-opacity-60 w-[89vw] md:w-[50vw] py-8 px-8">


            <div className="flex flex-col justify-center gap-2 items-center">
                <h1 className="text-neutral-200 font-minecraft text-2xl">Server Stats</h1>
                <p className="text-neutral-300 font-minecraft text-sm"><span className="underline decoration-yellow-500 decoration-4">{3333}</span> unique players have ever joined.</p>
                <p className="text-neutral-300 font-minecraft text-sm">The server and it's world was created on <span className="underline decoration-yellow-500 decoration-4">July 23rd, 2021</span>.</p>
            </div>

            <div className="flex flex-row">

                {
                    /**
                     * Server chat
                     */
                }
                <div className="mr-auto h-full flex gap-2 flex-col w-[77%]">
                    <p className="text-neutral-200 font-minecraft text-sm">Server chat</p>
                    <div className="flex flex-col bg-zinc-700 bg-opacity-50 rounded-sm mr-auto max-h-96 h-96 w-full">
                        <div className="flex gap-2 px-3 py-4 flex-col">
                            {
                                msgs.map(item => (
                                    <div className="flex flex-row gap-3 mr-auto">
                                        <p className="text-neutral-100 font-minecraft text-xs">&lt;{item.username}&gt;</p>
                                        <p className="text-neutral-100 font-minecraft text-xs">{item.message}</p>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="mt-auto w-full h-12 flex items-center border-t border-t-zinc-600">
                            <input placeholder="Chat" className="w-full h-full px-4 font-minecraft bg-zinc-100"></input>
                            <button className="w-24  bg-emerald-500 h-full text-neutral-100 font-minecraft">Send</button>
                        </div>
                    </div>
                </div>

                {
                    /**
                     * Player List
                     */
                }
                <div className="ml-auto h-full flex gap-2 flex-col">
                    <p className="text-neutral-200 font-minecraft text-sm">Players online: {players.length}</p>
                    <div className="flex gap-1 px-3 py-4 flex-col bg-zinc-700 bg-opacity-50 rounded-sm ml-auto max-h-96 h-96 w-56 overflow-scroll overflow-x-hidden">
                        {
                            players.map(item => (

                                <div className="flex flex-row gap-2">
                                    <img alt={`${item}`} src={`https://minotar.net/avatar/${item}/25`} />
                                    <a className="text-neutral-200 font-minecraft" href={`https://namemc.com/profile/${item}`}>{item}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>




        </div>
    )

}

export default ServerStats;