import Banner from "../components/Main/Banner";
import Info from "../components/Main/Info";
import Section from "../components/Main/Section";
import { useState, useEffect } from 'react';

const Home = () => {
    const ws = new WebSocket('ws://167.99.0.51:3333/playerlist');

    const [players, setPlayers] = useState([])
    const [uPlayers, setUniquePlayers] = useState(0);
    const [msgs, setMessages] = useState([])

    const messageSendFunc = (message) => {
        if(!message) return;
        ws.send(message);
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
                console.log(`username: ${msg.user} message: ${msg.msg} 3`)
                setMessages(last => [...last, { username: msg.user, message: msg.msg }])
            }

            return () => ws.close();
        }

    }, []);
    
    return (
        <div>
            <Banner />
            <Section players={players} msgs={msgs} messageSendFunc={messageSendFunc} uPlayers={uPlayers} />
            <Info />
        </div>
    )
}

export default Home;