import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Vote from './pages/Vote';
import Faq from './pages/Faq';
import StaffPage from './pages/Staff';
import NavBar from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';

const Index = () => {
    const ws = new WebSocket(`${import.meta.env.VITE_APP_websocket_http}`);

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
     * Insert temp username modal popup
     */
    const [showInsertModal, setShowInsertModal] = useState(false);

    const messageSendFunc = message => {
        if (!tempUsername) return setShowInsertModal(true);
        if (!message || message.length < 2) return;
        ws.send(`[${tempUsername}] » ${message}`)
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
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home messageSendFunc={messageSendFunc} showInsertModal={showInsertModal} setShowInsertModal={setShowInsertModal} players={players} uPlayers={uPlayers} msgs={msgs} setTempUsername={setTempUsername} />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/vote" element={<Vote />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/staff" element={<StaffPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}

export default Index;