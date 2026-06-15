import React from "react";

class TimerDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    getStatusClassName() {
        if (this.props.status === 'started' && this.props.currentSecond <= 3) {
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
