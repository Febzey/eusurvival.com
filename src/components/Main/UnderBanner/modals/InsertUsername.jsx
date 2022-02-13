import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
const InsertUsernameModal = ({ setShowInsertModal, handleTempUsername, usernameIsInvalid }) => {

    const [text, setText] = useState("");

    return (
        <>
            <div className="justify-center w-[70vw] lg:w-[18vw] mx-auto items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="flex flex-row items-center justify-center mb-1">
                    <div className="bg-zinc-200 rounded flex flex-row rounded-r-none">
                        <input placeholder="choose a username" className="w-full px-5 py-5" onChange={(e) => setText(e.target.value)} />
                        <button className="px-4 font-minecraft text-2xl text-white bg-sky-500 hover:bg-sky-700 duration-200 ease-in-out" onClick={() => handleTempUsername(text)}>Done</button>
                    </div>
                    <FaTimes className="text-white text-4xl cursor-pointer hover:text-neutral-400 duration-300 ease-in-out" onClick={() => setShowInsertModal(false)} />
                </div>
                {
                    usernameIsInvalid && <p className="text-red-300 font-Quicksand text-center px-4">Max length is 16. No Spaces or special characters. Don't leave blank</p>
                }
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )

}

export default InsertUsernameModal;