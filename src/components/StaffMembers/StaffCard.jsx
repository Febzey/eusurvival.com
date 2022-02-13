const StaffCard = ({ name, text, rank }) => {
    let rankColorStyle;
    switch(rank) {
        case "Owner":
            rankColorStyle = "text-red-500"
            break;
        case "Mod": 
            rankColorStyle = "text-blue-500"
            break;
        case "Trial-Mod":
            rankColorStyle = "text-blue-500"
            break;
    }

    return (
        <div className="flex text-zinc-200 flex-col px-7 py-8 rounded-sm w-[94%] lg:w-[60%] border-2 border-zinc-600">

            <div className="mx-auto my-4">
                <img alt={name} src={`https://minotar.net/avatar/${name}/150`} />
            </div>

            <h1 className="font-Fredoka mx-auto mb-4">[<span className={rankColorStyle}>{rank}</span>] {name}</h1>
            <p className="font-Quicksand text-center">{text}</p>
        </div>
    )
};

export default StaffCard;