import React from "react";

class TimerDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    getStatusClassName() {
        console.log(this.props.currentSecond);
        if (this.props.currentSecond <= 3) {
            return 'time-left pulsate';
        }
        return 'time-left';
    }
    render() {
        return (
            <p id="time-left-placeholder" className={this.getStatusClassName()}>
                {this.props.timerDisplayValue}
            </p>
        );
    }
}
export default TimerDisplay;
