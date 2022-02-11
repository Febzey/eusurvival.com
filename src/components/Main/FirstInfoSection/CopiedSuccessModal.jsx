import { FaTimes } from 'react-icons/fa';
const CopiedModal = ({setShowModal}) => {
    return (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <div className="relative p-6 flex items-center flex-row">
                        <p className="pr-4">Copied Successfully. Enjoy playing :D</p><FaTimes className="text-xl hover: cursor-pointer duration-200 ease-in-out transform hover:-translate-1 hover:scale-125" onClick={() => { setShowModal(false) }} />
                    </div>


                </div>
            </div>
        </div>

        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    )
    
}

export default CopiedModal;