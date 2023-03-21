import React from 'react'
class TimerOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.status === 'default' || this.props.status === 'finished') {
            return (
                <div id="counter-value-placeholder">
                    <center>
                        <label htmlFor="timer-option-timeframe-1">
                            <input id="timer-option-timeframe-1" onChange={() => this.props.onCountdownTimeChange(60)}
                                   className="form-radio" type="radio" name="count-value" value="1"/> 1 min</label>
                        <label htmlFor="timer-option-timeframe-2">
                            <input defaultChecked id="timer-option-timeframe-2"
                                   onChange={() => this.props.onCountdownTimeChange(600)}
                                   className="form-radio" type="radio" name="count-value" value="10"/> 10 min</label>
                        <label htmlFor="timer-option-timeframe-3">
                            <input id="timer-option-timeframe-3" onChange={() => this.props.onCountdownTimeChange(3000)}
                                   className="form-radio" type="radio" name="count-value" value="50"/>50 min</label>
                        <label htmlFor="timer-option-timeframe-4">
                            <input id="timer-option-timeframe-4" onChange={() => this.props.onCountdownTimeChange(3600)}
                                   className="form-radio" type="radio" name="count-value" value="60"/> 1 hour</label>
                    </center>
                </div>
            );
        }

        return ('');
    }
}

export default TimerOptions;
