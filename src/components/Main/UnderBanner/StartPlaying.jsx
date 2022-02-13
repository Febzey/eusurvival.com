
const StartPlaying = ({setShowModal}) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-neutral-200 font-Quicksand font-bold text-xl mb-2 ml-auto mr-auto">Start Playing!</h1>
            <div className="flex flex-row">
                <div className="bg-white px-9 text-xl font-bebas tracking-wider text-gray-600 flex items-center">EUSURVIVAL.COM</div>
                <button className="group bg-yellow-500 py-3 px-3 font-Fredoka text-white tracking-wide text-xl duration-200 ease-in-out transform hover:-translate-1 hover:scale-110 hover: cursor-pointer active:bg-yellow-700" onClick={() => { navigator.clipboard.writeText("eusurvival.com"), setShowModal(true) }}>copy.</button>
            </div>

        </div>
    )

}

export default StartPlaying;