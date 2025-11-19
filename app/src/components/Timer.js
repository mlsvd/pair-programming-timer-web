import React from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from './TimerControls';
import TimerOptions from "./TimerOptions";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'default',
            countdownTimeInSeconds: 600,
            currentSecond: 600,
            timerDisplayValue: '--:--',
            intervalRef: null
        }
    }
    startTimer() {
        this.setState({currentSecond: this.state.countdownTimeInSeconds});
        this.setState({status: 'started'});
        this.setState({timerDisplayValue: this.timeToDisplayValue()});
        this.startTicking();
    }
    pauseTimer() {
        this.setState({status: 'paused'});
    }
    resetTimer() {
        this.setState({status: 'default'});
        this.stopTicking();
        this.setState({currentSecond: this.state.countdownTimeInSeconds});
        this.setState({timerDisplayValue: '--:--'});

    }
    continueTimer() {
        this.setState({status: 'started'});
        this.startTicking();
    }

    startTicking() {
        this.stopTicking();
        this.tick();
        var tickerIntervalValue = setInterval(
            function() {
                this.tick();
            }.bind(this),
            1000
        );
        this.setState({intervalRef: tickerIntervalValue});
    }
    stopTicking() {
        clearInterval(this.state.intervalRef);
    }
    tick() {
        if (this.state.status !== 'started') {
            return;
        }

        if (this.state.currentSecond <= 0) {
            this.stopTicking();
            this.setState({status: 'finished'});
            return;
        }

        this.setState({currentSecond: --this.state.currentSecond});
        if (this.state.currentSecond <= 0) {
            this.stopTicking();
            this.setState({status: 'finished'});
        }

        this.setState({timerDisplayValue: this.timeToDisplayValue()})
    }
    timeToDisplayValue() {
        var timeDTO = this.transformSecondsToTimeDTO(this.state.currentSecond);
        var valuesArray = [];
        if (timeDTO.hours > 0) {
            valuesArray.push(timeDTO.hours);
        }
        valuesArray.push(timeDTO.minutes);
        valuesArray.push(timeDTO.seconds);

        return valuesArray.join(":")
    }
    transformSecondsToTimeDTO(totalSeconds) {
        var seconds = Math.floor(totalSeconds % 60);
        totalSeconds /= 60;
        var minutes = Math.floor(totalSeconds % 60);
        totalSeconds /= 60;
        var hours = Math.floor(totalSeconds % 24);
        totalSeconds /= 24;
        var days = Math.floor(totalSeconds);

        return {
            "days" :  ("0" + days).slice(-2),
            "hours" : ("0" + hours).slice(-2),
            "minutes" : ("0" + minutes).slice(-2),
            "seconds" : ("0" + seconds).slice(-2)
        };
    }

    changeCountdownTimeInSeconds(seconds) {
        this.setState({countdownTimeInSeconds: seconds});
        this.setState({currentSecond: this.state.countdownTimeInSeconds});
    }

    render() {
        return (
            <div id="counter-value-placeholder">
                <TimerDisplay currentSecond={this.state.currentSecond} timerDisplayValue={this.state.timerDisplayValue} />
                <TimerOptions
                    status={this.state.status}
                    onCountdownTimeChange={(seconds) => this.changeCountdownTimeInSeconds(seconds)}
                    timeframeSelectedInSeconds={this.state.timeframeSelectedInSeconds}
                    translations={this.props.translations}
                />
                <TimerControls
                    status={this.state.status}
                    onStartTimer={() => this.startTimer()}
                    onPauseTimer={() => this.pauseTimer()}
                    onResetTimer={() => this.resetTimer()}
                    onContinueTimer={() => this.continueTimer()}
                    translations={this.props.translations}
                />
            </div>
        );
    }
}
export default Timer;
