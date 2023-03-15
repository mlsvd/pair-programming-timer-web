import React from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from './TimerControls';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'default',
            timeSelected: 5,
            currentSecond: 5,
            timerDisplayValue: '--:--',
            intervalRef: null
        }
    }
    startTimer() {
        this.setState({status: 'started'});
        this.startTicking();
    }
    pauseTimer() {
        this.setState({status: 'paused'});
    }
    resetTimer() {
        this.setState({status: 'default'});
        this.stopTicking();
        this.setState({currentSecond: 5});
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

    render() {
        return (
            <div>
                <TimerDisplay timerDisplayValue={this.state.timerDisplayValue} />
                <TimerControls status={this.state.status}
                    onStartTimer={() => this.startTimer()}
                    onPauseTimer={() => this.pauseTimer()}
                    onResetTimer={() => this.resetTimer()}
                    onContinueTimer={() => this.continueTimer()}
                />
            </div>
        );
    }
}
export default Timer;
