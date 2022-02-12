import Banner from "../components/Main/Banner";
import Info from "../components/Main/Info";
import Section from "../components/Main/Section";
import { useState, useEffect } from 'react';

const Home = () => {
    const ws = new WebSocket('wss://ws.forestbot.io/playerlist');

    const [showModal, setShowModal] = useState(false);
    const [showInsertModal, setShowInsertModal] = useState(false);

    const [players, setPlayers] = useState([])
    const [uPlayers, setUniquePlayers] = useState(0);
    const [msgs, setMessages] = useState([])
    
    const [tempUsername, setTempUsername] = useState(null);
    const [usernameIsInvalid, setUsernameIsInvalid] = useState(false);

    const handleTempUsername = (username) => {
        if (/\s/.test(username) || username.length > 16 || !username) return setUsernameIsInvalid(true);        
        if (showInsertModal) setShowInsertModal(false);
        return setTempUsername(username);
    }

    const messageSendFunc = (message) => {
        if (!tempUsername) return setShowInsertModal(true);
        if(!message || message.length < 2) return;
        ws.send(`[${tempUsername}] » ${message}`);
        return () => ws.close();
    }

    useEffect(() => {
        ws.onmessage = message => {
            const msg = JSON.parse(message.data);

            if (msg.uniquePlayers) {
                console.log(msg.uniquePlayers)
                setUniquePlayers(parseInt(msg.uniquePlayers));
            }

            if (msg.playerlist)
                setPlayers(msg.playerlist)

            if (msg.user && msg.msg) {
                setMessages(last => [...last, { username: msg.user, message: msg.msg }])
            }

            return () => ws.close();
        }

    }, []);
    
    return (
        <div>
            <Banner />
            <Section players={players} msgs={msgs} messageSendFunc={messageSendFunc} uPlayers={uPlayers} showModal={showModal} setShowModal={setShowModal} showInsertModal={showInsertModal} setShowInsertModal={setShowInsertModal} handleTempUsername={handleTempUsername} usernameIsInvalid={usernameIsInvalid} />
            <Info />
        </div>
    )
}

export default Home;