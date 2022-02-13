import { useState } from 'react';
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const ServerStats = ({ players, msgs, messageSendFunc, uPlayers }) => {

    const [message, setMessage] = useState("");
    const [cooldown, setCooldown] = useState(false);

    const handleCooldown = async () => {
        setMessage(" ")
        if (!cooldown) setCooldown(true);
        await sleep(6000);
        return setCooldown(false);
    }

    return (
        <div className="flex flex-col gap-3 bg-zinc-800 bg-opacity-60 w-[89vw] lg:w-[50vw] pt-8 px-8">
            <div className="flex flex-col justify-center gap-2 items-center mb-14 text-center">
                <h1 className="text-neutral-200 font-minecraft text-4xl">Server Stats</h1>
                <p className="text-neutral-300 font-minecraft text-xl"><span className="underline decoration-yellow-500 decoration-4">{uPlayers}</span> unique players have ever joined.</p>
                <p className="text-neutral-300 font-minecraft text-xl">The server and it's world was created on <span className="underline decoration-yellow-500 decoration-4">July 23rd, 2021</span>.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                {
                    /**
                     * Server chat
                     */
                }
                <div className="mr-auto h-full flex flex-col w-[100%] lg:w-[77%]">
                    <p className="text-neutral-200 font-minecraft text-sm pb-2">Server chat</p>
                    <div className="flex flex-col bg-zinc-700 bg-opacity-50 rounded-sm mr-auto max-h-[335px] h-[335px] w-full overflow-x-hidden">
                        <div className="flex gap-2 px-3 py-4 flex-col">
                            {
                                msgs.map(item => (
                                    <div className="flex flex-row gap-3 mr-auto">
                                        <p className="text-neutral-100 font-minecraft text-md">&lt;{item.username}&gt;</p>
                                        <p className="text-neutral-100 font-minecraft text-md">{item.message}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="mt-auto w-full h-12 flex items-center border-t border-t-zinc-600">
                        <input onChange={e => setMessage(`${e.target.value}`)} placeholder="Chat" className="w-full text-xl h-full px-4 font-minecraft bg-zinc-100" value={message}></input>
                        {
                            !cooldown ? <button className="w-24  bg-emerald-500 h-full text-neutral-100 font-minecraft text-xl" onClick={() => { messageSendFunc(message); handleCooldown() }}>Send</button>
                                      : <button className="w-24  bg-red-400 h-full text-neutral-100 font-minecraft text-xl" onClick={() => {alert("Cooldown, wait 6 seconds.")}}>Send</button>

                        }
                    </div>
                </div>

                {
                    /**
                     * Player List
                     */
                }
                <div className="ml-auto h-full flex gap-2 flex-col w-full lg:w-auto">
                    <p className="text-neutral-200 font-minecraft text-sm">Players online: {players.length}</p>
                    <div className="flex gap-1 px-3 py-4 flex-col bg-zinc-700 bg-opacity-50 rounded-sm ml-auto max-h-96 h-96 w-full lg:w-56 overflow-scroll overflow-x-hidden">
                        {
                            players.map(item => (
                                <div className="flex flex-row gap-2">
                                    <img alt={`${item}`} src={`https://minotar.net/avatar/${item}/25`} />
                                    <a className="text-neutral-200 font-minecraft text-lg" href={`https://namemc.com/profile/${item}`}>{item}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <p className="text-neutral-200 mx-auto font-Quicksand text-sm pt-3 pb-6">Made possibly by: <a href="https://forestbot.io" className="text-sky-400 underline hover:text-sky-500">https://forestbot.io</a></p>
        </div>
    )
}
export default ServerStats;