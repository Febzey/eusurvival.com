import Accordion from "./Accordion";
export const First = () => {
    return (
        <div className="text-white ml-auto mr-auto w-3/4 h-auto py- py-40 flex justify-center items-center bg-dGray bg-opacity-60 shadow-2xl flex-col">
            <h1 className="p-16 font-bebas text-4xl opacity-90">Frequently Asked Questions</h1>
            <div className="flex flex-col gap-8 w-full items-center">
                <Accordion title={"What is the world border?"} content={"Overworld 500k each axis, 1 million x 1 million total, Nether 62.5k each axis, End 31.5k each axis"}/>
                <Accordion title={"Is the nether roof enabled?"} content={"No it is not, and never will be"}/>
                <Accordion title={"Is tnt/carpet/rail duping enabled?"} content={"TNT Duping is ENABLED and ALLOWED, however carpet/rail duping is not allowed."}/>
                <Accordion title={"Is the seed public?"} content={"No, please read our rules to find out more about the seed."}/>
                <Accordion title={"Are there mob caps?"} content={"Yes mobs are capped to help TPS stay at 20. Caps change often, so please make a ticket on our Discord and staff will give you the current caps."}/>
                <Accordion title={"Can I /tpa to my friends?"} content={"No, we do not have any teleport permissions for players"}/>
                <Accordion title={"Why do monsters not move when they come out of a spawner?"} content={"Mobs from spawners have their AI disabled"}/>
                <Accordion title={"Why does my inventory and crafting table keep glitching out?"} content={"You are on a 1.16 or older client, try using a 1.17+ client"}/>
            </div>
        </div>
    )
};
export default First;
