import LazyShow from "./LazyShow";

const Info = () => {
    return (
        <div className="flex items-center py-12 flex-col bg-contentBackground bg-no-repeat bg-center">   

            <LazyShow>
                <h1 className="text-4xl text-gray-200 font-bold font-bebas tracking-wider border-b-2 border-darkGray mb-7">EUSurvival ?</h1>
                <p className="text-gray-200 text-xl tracking-wide mb-auto">
                EUSurvival is exactly what it sounds like. A survival server based in Europe. Our goal is simple, to create a non-resetting map where peoples ideas and builds can come together. We aim to strive as close to vanilla Minecraft as possible in servers and allow an "anarchy" style feel to the game, whilst disallowing hacked clients.
                </p>

            </LazyShow>

            <LazyShow>
            <h1 className="text-4xl text-gray-200 font-bold font-bebas tracking-wider border-b-2 border-darkGray mb-7">A little bit about us</h1>
                <p className="text-gray-200 text-xl tracking-wide mb-auto">
                The server was set up on the 23rd July and will never reset from this map. Those of you familiar with the term anarchy in Minecraft are likely familiar with FitMC, our ideals are similar to 2b2t however we disallowed hacked clients to make the game more fair. Many players opt to create history in the way of massive builds that are incredibly hard to create on survival servers, some create huge farms with complicated redstone mechanics, and others embrace full anarchy and loot and pillage any and all builds they can find. This creates an interesting dynamic where builders will often hide their bases in careful ways to prevent being found whilst they work on their masterpieces.
                </p>
            </LazyShow>


            <LazyShow>
            <h1 className="text-4xl text-gray-200 font-bold font-bebas tracking-wider border-b-2 border-darkGray mb-7">Have some fun.</h1>
                <p className="text-gray-200 text-xl tracking-wide mb-auto">
                The idea of allowing griefing is intentional as we aim to mirror a survival experience as best as possible, there is no protection from people in vanilla Minecraft and the thrill of that is often enjoyable.
                If you are interested in a server that will slowly build its history and community over time and make your mark on the server through builds, killing or griefing, please feel free to check us out!
                </p>
            </LazyShow>

            <LazyShow>
            <h1 className="text-4xl text-gray-200 font-bold font-bebas tracking-wider border-b-2 border-darkGray mb-7">The Goal.</h1>
                <p className="text-gray-200 text-xl tracking-wide mb-auto">
                We noticed a lack of anarchy style survival servers in the EU Community and so set our goals on providing a server for people seeking better ping and connection to the server. Despite this, ping is good for other players such as NA East often receiving around 80 ping which is good.
                </p>
            </LazyShow>
        </div>
    )
}


export default Info;