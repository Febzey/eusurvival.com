import Banner from "../components/Main/Banner/Banner";
import Info from "../components/Main/InfoSection/Info";
import Section from "../components/Main/UnderBanner/Section";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ messageSendFunc, showInsertModal, setShowInsertModal, players, uPlayers, msgs, setTempUsername }) => {
    //Copied server IP modal popup
    const [showModal, setShowModal] = useState(false);
    //if username is invalid.
    const [usernameIsInvalid, setUsernameIsInvalid] = useState(false);

    const handleTempUsername = (username) => {
        if (/\s/.test(username) || username.length > 16 || !username) return setUsernameIsInvalid(true);
        if (showInsertModal) setShowInsertModal(false);
        return setTempUsername(username);
    }

    return (
        <div>
            <Banner />
            <Section
                players={players}
                msgs={msgs}
                messageSendFunc={messageSendFunc}
                uPlayers={uPlayers}
                showModal={showModal}
                setShowModal={setShowModal}
                showInsertModal={showInsertModal}
                setShowInsertModal={setShowInsertModal}
                handleTempUsername={handleTempUsername}
                usernameIsInvalid={usernameIsInvalid}
            />

            <div className="w-full h-40 bg-yellow-500 flex items-center justify-center">
                <Link to="/staff" className="duration-300 ease-in-out hover:border-zinc-700 active:bg-text-zinc-700 hover:text-zinc-700 border-4 border-white text-white font-Fredoka text-4xl px-8 py-5 rounded-sm">Meet out staff</Link>
            </div>

            <Info />
        </div>
    )
}

export default Home;