import React from 'react'
class TimerOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { customSeconds: '' };
    }

    commitCustomSeconds() {
        const val = parseInt(this.state.customSeconds, 10);
        if (val > 0) {
            this.props.onCountdownTimeChange(val);
        }
    }

    render() {
        if (this.props.status === 'default') {
            const t = this.props.translations.timer;
            return (
                <div id="counter-value-placeholder" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    margin: '1rem 0'
                }}>
                    <label htmlFor="timer-option-timeframe-1">
                        <input id="timer-option-timeframe-1" onChange={() => this.props.onCountdownTimeChange(60)}
                               className="form-radio" type="radio" name="count-value" value="1"/> {t.oneMin}</label>
                    <label htmlFor="timer-option-timeframe-2">
                        <input defaultChecked id="timer-option-timeframe-2"
                               onChange={() => this.props.onCountdownTimeChange(600)}
                               className="form-radio" type="radio" name="count-value" value="10"/> {t.tenMin}</label>
                    <label htmlFor="timer-option-timeframe-3">
                        <input id="timer-option-timeframe-3" onChange={() => this.props.onCountdownTimeChange(3000)}
                               className="form-radio" type="radio" name="count-value" value="50"/> {t.fiftyMin}</label>
                    <label htmlFor="timer-option-timeframe-4">
                        <input id="timer-option-timeframe-4" onChange={() => this.props.onCountdownTimeChange(3600)}
                               className="form-radio" type="radio" name="count-value" value="60"/> {t.oneHour}</label>
                    <input
                        type="number"
                        min="1"
                        className="custom-seconds-input"
                        placeholder={t.customPlaceholder}
                        value={this.state.customSeconds}
                        onChange={(e) => this.setState({ customSeconds: e.target.value })}
                        onKeyDown={(e) => { if (e.key === 'Enter') this.commitCustomSeconds(); }}
                        onBlur={() => this.commitCustomSeconds()}
                    />
                </div>
            );
        }

        return ('');
    }
}

export default TimerOptions;
