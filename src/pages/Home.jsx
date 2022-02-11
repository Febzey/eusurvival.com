import Banner from "../components/Main/Banner";
import Info from "../components/Main/Info";
import Section from "../components/Main/Section";
import { useState, useEffect } from 'react';

const Home = () => {
    const [players, setPlayers] = useState([])
    const [msgs, setMessages] = useState([])

    //TODO: work on sending messages back to forestbot for live chat
    useEffect(() => {
        const ws = new WebSocket('ws://192.168.100.103:3333/playerlist');
        ws.onmessage = message => {
            const msg = JSON.parse(message.data);
            
            if (msg.playerlist) 
                setPlayers(msg.playerlist)

            if (msg.user && msg.msg) {
                console.log(`username: ${msg.user} message: ${msg.msg} 3`)
                setMessages(last => [...last, {username: msg.user, message: msg.msg}])
            }

            return () => ws.close();
        }
    }, []);

    return (
        <div>
            <Banner/>
            <Section players={players} msgs={msgs}/>
            <Info/>
        </div>
    )
}

export default Home;