import React from 'react'

const RulesContent = () => {
    return (
        <div className="min-h-screen bg-dGray bg-opacity-40 py-28 flex justify-center items-center gap-28 flex-col">

            <div className="flex flex-row items-center gap-11 justify-center bg-gray-400 bg-opacity-10 py-11 px-11 rounded shadow-2xl">
                
                <div className="max-w-3xl">
                    <h1 className="text-5xl text-white opacity-90 font-bebas text-center md:text-left">About hacking.</h1>
                    <p className="text-white opacity-90 tracking-wide text-lg px-2">
                    Hacked clients offer an unfair advantage to anyone using them and so therefore are banned completely and NOT allowed to be used on EUSurvival. Things such as Xray, ESP, and blatant hacks such as KillAura and Fly are disallowed to name a few, anyone found to be using hacked clients will be banned. Whilst not explicitly classified as a hack, things such as macros and autoclickers for PVP are also strictly NOT allowed and are also bannable. Additionally, any form of radar be it Voxelmap player radar or tracers is NOT allowed, as well as any form of health indicators (these give an unfair advantage in PVP and so are NOT allowed under any circumstance). Some clients we DO allow include but are not limited to; Lunar, Optifine, Badlion. Please feel free to ask if you are wondering if a client is allowed or not.
                    </p>
                </div>
                
                <div className="hidden md:block">
                    <img alt="noHacking" src="/src/images/nohacking.png" height="150" width="150"></img>
                </div>

            </div>


            <div className="flex flex-row items-center gap-11 justify-center bg-gray-400 bg-opacity-10 py-11 px-11 rounded shadow-2xl">
                
                <div className="max-w-3xl">
                    <h1 className="text-5xl text-white opacity-90 font-bebas text-center md:text-left">Intentional Lag.</h1>
                    <p className="text-white opacity-90 tracking-wide text-lg px-2">
                    Intentionally lagging the server creates stress on the server machine and ruins the experience for the majority of players, this is therefore NOT allowed. Intentionally lagging the server is bannable. Ocean-Makers and other similar redstone contraptions built on a large scale that can cause detrimental lag are also NOT allowed however these will come with a warning from staff before being banned for it.
                    </p>
                </div>
                
                <div className="hidden md:block">
                    <img alt="noHacking" src="/src/images/lag.png" height="150" width="150"></img>
                </div>

            </div>


            <div className="flex flex-row items-center gap-11 justify-center bg-gray-400 bg-opacity-10 py-11 px-11 rounded shadow-2xl">
                
                <div className="max-w-3xl">
                    <h1 className="text-5xl text-white opacity-90 font-bebas text-center md:text-left">Exploits</h1>
                    <p className="text-white opacity-90 tracking-wide text-lg px-2">
                    Using exploits to gain advantages over other players is NOT allowed. This includes but is not limited to; duping, end portal breaking, seed cracking/attempts (please note that using the seed to your advantage for something that may appear as xray such as digging directly to spawners will likely be treated as xray and might end up with you banned! Do not use the seed to avoid this) and bedrock removal. These actions are what we deem as “non-vanilla” and “unintentional” by developers of the game, they therefore will be bannable. (Staff may choose to warn before banning immediately for some of these exploits).
                    </p>
                </div>
                
                <div className="hidden md:block">
                    <img alt="noHacking" src="/src/images/malware.png" height="150" width="150"></img>
                </div>

            </div>


            <div className="flex flex-row items-center gap-11 justify-center bg-gray-400 bg-opacity-10 py-11 px-11 rounded shadow-2xl">
                
                <div className="max-w-3xl">
                    <h1 className="text-5xl text-white opacity-90 font-bebas text-center md:text-left">Doxxing</h1>
                    <p className="text-white opacity-90 tracking-wide text-lg px-2">
                    We have a zero tolerance policy on doxxing and it is strictly NOT allowed ingame or through the discord channel. Violating this rule will result in immediate suspension from any EUSurvival services including the server and discord permanently. Doxxing incidents will be dealt with on a case-by-case basis by the staff team and punishment will be swift and accordingly.
                    </p>
                </div>
                
                <div className="hidden md:block">
                    <img alt="noHacking" src="/src/images/dox.png" height="150" width="150"></img>
                </div>

            </div>

        </div>
    )
};

export default RulesContent;