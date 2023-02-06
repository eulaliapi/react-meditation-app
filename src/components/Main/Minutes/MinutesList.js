import Minutes from "./Minutes";

const MinutesList = ({timeBtns, player, progressBarWidth, handleTimeBtns}) => {
    return(
        <div className="main__btn-wrapper">
        {
            timeBtns.map((timeBtn) => (
                <Minutes
                    key={timeBtn.id}
                    timeBtn={timeBtn}
                    player={player}
                    progressBarWidth={progressBarWidth}
                    handleTimeBtns={handleTimeBtns}
                />
            ))
        }
    </div>
    )
}

export default MinutesList;