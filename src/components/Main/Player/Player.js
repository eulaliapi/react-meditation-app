import {CgPlayButtonO} from "react-icons/cg";
import {CgPlayPauseO} from "react-icons/cg";
import {MdRestartAlt} from "react-icons/md"

const Player = ({handlePlayer, player, progressBarWidth, restartCountdown}) => {
    return (
        <div className="main__play-wrapper">
            <button
                className="main__play-btn"
                onClick={handlePlayer}
                aria-label={player? "Player paused" : "Player active"}
            >
                {player ? <CgPlayPauseO /> : <CgPlayButtonO />}
            </button>
            <div className="main__time__wrapper">
                <div className="main__time-bar" style={{ width: progressBarWidth + "px" }}></div>
                <button
                    style={player ? { "pointerEvents": "none" } : { "pointerEvents": "auto" }}
                    className="main__time-restart"
                    onClick={restartCountdown}
                >
                    <MdRestartAlt />
                </button>
            </div>
        </div>
    )
}

export default Player;