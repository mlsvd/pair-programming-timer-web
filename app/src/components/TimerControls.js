import React from "react";

class TimerControls extends React.Component {
    test() {
        console.log(1);
    }
    render() {
        if (this.props.status === 'paused') {
            return (
                <p className="lead">
                    <button id="continue-button" onClick={() => this.props.onContinueTimer()} className="timer-button play-btn"><span>Continue</span></button>
                    <button id="reset-button" onClick={() => this.props.onResetTimer()} className="timer-button stop-btn play-btn"><span>Reset</span></button>
                </p>
            );
        }

        if (this.props.status === 'started') {
            return (
                <p className="lead">
                    <button id="pause-button" onClick={() => this.props.onPauseTimer()} className="timer-button pause-btn"><span>Pause</span></button>
                    <button id="reset-button" onClick={() => this.props.onResetTimer()} className="timer-button stop-btn play-btn"><span>Reset</span></button>
                </p>
            );
        }

        if (this.props.status === 'finished') {
            return (
                <p className="lead">
                    <button id="reset-button" onClick={() => this.props.onResetTimer()} className="timer-button stop-btn play-btn"><span>Reset</span></button>
                </p>
            );
        }

        return (
            <p className="lead">
                <button id="start-button" onClick={() => this.props.onStartTimer()} className="timer-button play-btn"><span>Start</span></button>
            </p>
        );
    }
}
export default TimerControls;
