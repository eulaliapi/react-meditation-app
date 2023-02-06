const Audio = ({ player, soundBtn, handleSoundBtns }) => {
    return (
        <button
            style={player ? { "pointerEvents": "none" } : { "pointerEvents": "auto" }}
            className={soundBtn.play ? "main__btn icon active" : "main__btn icon"}
            key={soundBtn.id}
            id={soundBtn.id}
            onClick={() => handleSoundBtns(soundBtn.id)}
            audio={soundBtn.sound}
            aria-label={soundBtn.id}
        >
        {soundBtn.icon}
        </button>
    )
};

export default Audio