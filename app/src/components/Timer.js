import React from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from './TimerControls';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            timeSelected: 60,
            currentSecond: 60,
        }
    }
    startTimer() {
        this.setState({isRunning: true});
    }
    pauseTimer() {
        this.setState({isRunning: false});
    }
    resetTimer() {
        this.setState({isRunning: false});
    }
    continueTimer() {
        this.setState({isRunning: true});
    }
    tick() {
        if (!this.state.isRunning) {
            return;
        }

        this.setState({currentSecond: this.state.currentSecond--});
        if (this.state.currentSecond <= 0) {
            this.stopTicking();
        }


    }
    render() {
        return (
            <div>
                <TimerDisplay />
                <TimerControls
                    onStartTimer={() => this.startTimer()}
                    onPauseTimer={() => this.pauseTimer()}
                    onResetTimer={() => this.continueTimer()}
                    onContinueTimer={() => this.resetTimer()}
                />
            </div>
        );
    }
}
export default Timer;
