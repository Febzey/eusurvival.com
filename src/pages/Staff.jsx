import StaffCard from '../components/StaffMembers/StaffCard';

const StaffPage = () => {
    return (
        <div className="py-32 flex items-center justify-center gap-12 flex-col mt-20 w-[90%] lg:w-[40%] mx-auto">

            <StaffCard
                name={"Iam_Idiot"}
                text={`the server's one and only! Known to be a dumbass most times, thus
                the name. Too stupid to read or write, so he never signs books. It is
                amazing he even knows what Minecraft is. With much help from Frazzle53,
                he somehow keeps this shitshow server running somewhat smoothly, most times.`}
                rank={"Owner"}
            />

            <StaffCard
                name={"Frazzle53"}
                text={`known best smeller on the server and current chad staff
                member. He is known to frequently expose bald minecraft players such as
                ercercerc. This notorious bald has been actively seeking hair
                transplanters throughout multiple servers and Frazzle53 has brought
                light to these issues. A batsoup19 enjoyer and ex-minecraft
                extraordinaire, this man can be found on EUSurvival every now and then.`}
                rank={"Owner"}
            />

            <StaffCard
                name={"TwistedMedia"}
                text={`is a good mod at heart, he may be incredibly stupid, but he’s
                sure to help keep Eu survival a vanilla
                server. Hailing from the depths of the anarchy server he knows what to look out for, and totally won’t falseban
                you. But in all seriousness, Eu survival wouldn’t be the same without our cute twinky mod TwistedMedia.`}
                rank={"Mod"}
            />

            <StaffCard
                name={"notFebzey"}
                text={`Writes poor code and likes cats.`}
                rank={"Mod"}
            />

        </div>
    )
}
export default StaffPage;