import Banner from "../components/Main/Banner/Banner";
import Info from "../components/Main/InfoSection/Info";
import Section from "../components/Main/UnderBanner/Section";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const ws = new WebSocket('wss://ws.forestbot.io/playerlist');

    /**
     * State for copied modal.
     */
    const [showModal, setShowModal] = useState(false);

    /**
     * State for inster username modal
     */
    const [showInsertModal, setShowInsertModal] = useState(false);
 
    /**
     * Array of players currenty online.
     * data is fetched from websocket
     */
    const [players, setPlayers] = useState([])
 
    /**
     * The unique players count,
     * data is fetched from websocket.
     */
    const [uPlayers, setUniquePlayers] = useState(0);

    /**
     * Messages being recieved from websocket.
     */
    const [msgs, setMessages] = useState([])

    /**
     * State for the temporary username.
     */
    const [tempUsername, setTempUsername] = useState(null);
    
    /**
     * State for if the tempUsername is invalid.
     */
    const [usernameIsInvalid, setUsernameIsInvalid] = useState(false);

    const handleTempUsername = (username) => {
        if (/\s/.test(username) || username.length > 16 || !username) return setUsernameIsInvalid(true);
        if (showInsertModal) setShowInsertModal(false);
        return setTempUsername(username);
    }

    const messageSendFunc = (message) => {
        if (!tempUsername) return setShowInsertModal(true);
        if (!message || message.length < 2) return;
        ws.send(`[${tempUsername}] » ${message}`);
    }

    useEffect(() => {
        ws.onmessage = message => {
            const msg = JSON.parse(message.data);
            msg.uniquePlayers && setUniquePlayers(parseInt(msg.uniquePlayers));
            msg.playerlist && setPlayers(msg.playerlist)
            msg.user && setMessages(last => [...last, { username: msg.user, message: msg?.msg }])
            return () => ws.close();
        }
    }, []);

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