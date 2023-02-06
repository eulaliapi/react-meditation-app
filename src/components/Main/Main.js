import React from 'react';
import MinutesList from './Minutes/MinutesList';
import Player from './Player/Player';
import Audios from './Audios/AudiosList';

import rain from '../../assets/sounds/rain.mp3';
import beach from '../../assets/sounds/beach.mp3';
import {FaWater} from "react-icons/fa";
import {BsFillCloudRainFill} from "react-icons/bs";
import {BsVolumeMuteFill} from "react-icons/bs";

import './Main.css';

const Main = () => {
    
    const [player, setPlayer] = React.useState(false);
    const [progressBarWidth, setProgressBarWidth] = React.useState(200);
    const [timeBtns, setTimeBtns] = React.useState([
        {
            id: "2min",
            active: true,
            btnDesc: "2 minutes",
            secs: 120
        },
        {
            id: "5min",
            active: false,
            btnDesc: "5 minutes",
            secs: 300
        },
        {
            id: "10min",
            active: false,
            btnDesc: "10 minutes",
            secs: 600
        }
    ]);
    const [soundBtns, setSoundBtns] = React.useState([
        {
            id: "rain-sound",
            play: false,
            sound: new Audio(rain),
            icon: <BsFillCloudRainFill/>
        },
        {
            id: "beach-sound",
            play: false,
            sound: new Audio(beach),
            icon: <FaWater/>
        },
        {
            id: "no-sound",
            play: true,
            sound: new Audio(),
            icon: <BsVolumeMuteFill/>
        },

    ]);

    React.useEffect(() => {
        let countDown;

        if(player && progressBarWidth > 0) {

            const {secs} = timeBtns.find((timeBtn) => timeBtn.active)
            const partOfBar = 200/secs;
            countDown = setInterval(() => {
                setProgressBarWidth(
                    (prevProgressBarWidth) => prevProgressBarWidth - partOfBar)
            }, 1000);

            return () => clearInterval(countDown);

        } else {
            progressBarWidth > 0 ? clearInterval(countDown) : restartCountdown()
        }

    });

    React.useEffect(() => {
        
        if(player) {
            soundBtns.map((soundBtn) => soundBtn.play ? soundBtn.sound.src === "" ? "" : soundBtn.sound.play() : soundBtn.sound.pause());
        } else {
            soundBtns.map((soundBtn) => soundBtn.sound.src === "" ? '': soundBtn.sound.pause())
        }

    }, [player, soundBtns]);

    const handleSoundBtns = (id) => {
        
        const newSoundBtnsValues = soundBtns.map((soundBtn) => (
            soundBtn.id === id ? {...soundBtn, play: true} : {...soundBtn, play: false}
        ));
        setSoundBtns(newSoundBtnsValues);
    };

    const handlePlayer = () => {
        setPlayer(prev => !prev);
    };

    const restartCountdown = () => {
        setPlayer(false);
        setProgressBarWidth(200);
    }

    const handleTimeBtns = (id) => {

        const newTimeBtnsValues = timeBtns.map((timeBtn) => (
            timeBtn.id === id ? {...timeBtn, active: true} : {...timeBtn, active: false}
        ));
        setTimeBtns(newTimeBtnsValues);
    };

    return (
        
        <div className="Main">
            <MinutesList
                timeBtns={timeBtns}
                player={player}
                progressBarWidth={progressBarWidth}
                handleTimeBtns={handleTimeBtns} 
            />
            <Player
                handlePlayer={handlePlayer}
                player={player}
                progressBarWidth={progressBarWidth}
                restartCountdown={restartCountdown}
            />
            <Audios
                soundBtns={soundBtns}
                player={player}
                handleSoundBtns={handleSoundBtns}
            />
        </div>
    )
}

export default Main