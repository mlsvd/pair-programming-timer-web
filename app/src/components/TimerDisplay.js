import React from "react";

class TimerDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p id="time-left-placeholder" className="time-left">
                {this.props.timerDisplayValue}
            </p>
        );
    }
}
export default TimerDisplay;
