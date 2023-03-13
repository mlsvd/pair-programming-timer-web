import React from "react";

class TimerControls extends React.Component {
    render() {
        return (
            <p className="lead">
                <button id="start-button" className="timer-button play-btn"><span>Start</span></button>
                <button id="pause-button" className="timer-button pause-btn hidden"><span>Pause</span></button>
                <button id="continue-button" className="timer-button play-btn hidden"><span>Continue</span></button>
                <button id="reset-button" className="timer-button stop-btn play-btn hidden"><span>Reset</span></button>
            </p>
        );
    }
}
export default TimerControls;
