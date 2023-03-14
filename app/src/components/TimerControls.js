import React from "react";

class TimerControls extends React.Component {
    test() {
        console.log(1);
    }
    render() {
        return (
            <p className="lead">
                <button id="start-button" onClick={() => this.props.onStartTimer()} className="timer-button play-btn"><span>Start</span></button>
                <button id="pause-button" onClick={() => this.props.onPauseTimer()} className="timer-button pause-btn hidden"><span>Pause</span></button>
                <button id="continue-button" onClick={() => this.props.onContinueTimer()} className="timer-button play-btn hidden"><span>Continue</span></button>
                <button id="reset-button" onClick={() => this.props.onResetTimer()} className="timer-button stop-btn play-btn hidden"><span>Reset</span></button>
            </p>
        );
    }
}
export default TimerControls;
