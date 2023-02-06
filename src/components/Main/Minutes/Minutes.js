const Minutes = ({player, progressBarWidth, timeBtn, handleTimeBtns}) => {
    return (
        <button
            style={
                player || progressBarWidth !== 200 ?
                    { "pointerEvents": "none" } : { "pointerEvents": "auto" }
            }
            className={timeBtn.active ? "main__btn time active" : "main__btn time"}
            key={timeBtn.id}
            id={timeBtn.id}
            onClick={() => handleTimeBtns(timeBtn.id)}
            aria-label={timeBtn.btnDesc}
        >
            {timeBtn.btnDesc}
        </button>
    )
}

export default Minutes;