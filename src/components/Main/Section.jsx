import { useState } from 'react';
import Socials from './FirstInfoSection/Socials';
import StartPlaying from './FirstInfoSection/StartPlaying';
import CopiedModal from './FirstInfoSection/CopiedSuccessModal';
import ServerStats from './FirstInfoSection/ServerStats';

const Section = ({players, msgs, messageSendFunc, uPlayers}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="py-48 flex-col gap-32 w-full bg-wave bg-no-repeat bg-cover flex items-center justify-center">
               
                <div className="flex flex-col lg:flex-row gap-8">
                    <Socials/>
                    <StartPlaying setShowModal={setShowModal}/>
                </div>
               
                <ServerStats players={players} msgs={msgs} messageSendFunc={messageSendFunc} uPlayers={uPlayers}/>
           
            </div>
            {showModal && <CopiedModal setShowModal={setShowModal}/>}
        </>
    )
}
export default Section;