import { useState } from 'react';
import Socials from './FirstInfoSection/Socials';
import StartPlaying from './FirstInfoSection/StartPlaying';
import CopiedModal from './FirstInfoSection/CopiedSuccessModal';
import ServerStats from './FirstInfoSection/ServerStats';

const Section = ({players, msgs}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="h-screen w-full bg-wave bg-no-repeat bg-cover flex flex-col items-center justify-center md:justify-evenly flex-wrap">
                <div className="flex flex-row gap-12">
                    <Socials/>
                    <StartPlaying setShowModal={setShowModal}/>
                </div>
                <ServerStats players={players} msgs={msgs}/>
            </div>
            {showModal && <CopiedModal setShowModal={setShowModal}/>}
        </>
    )
}
export default Section;