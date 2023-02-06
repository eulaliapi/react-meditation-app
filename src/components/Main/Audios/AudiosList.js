import Audio from "./Audio";

const AudiosList = ({soundBtns, player, handleSoundBtns}) => {
    return (
        <div className="main__icon-wrapper">
            {soundBtns.map((soundBtn) => (
                <Audio
                    key={soundBtn.id}
                    soundBtn={soundBtn}
                    player={player}
                    handleSoundBtns={handleSoundBtns} 
                />
            ))
            }
        </div>
    )
}

export default AudiosList;