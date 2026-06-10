import React from 'react'
class TimerOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { customSeconds: '', selectedOption: '10' };
    }

    commitCustomSeconds() {
        const val = parseInt(this.state.customSeconds, 10);
        if (val > 0) {
            this.setState({ selectedOption: 'custom' });
            this.props.onCountdownTimeChange(val);
        }
    }

    handlePresetChange(value, seconds) {
        this.setState({ selectedOption: value, customSeconds: '' });
        this.props.onCountdownTimeChange(seconds);
    }

    render() {
        if (this.props.status === 'default') {
            const t = this.props.translations.timer;
            const { selectedOption, customSeconds } = this.state;
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
                        <input id="timer-option-timeframe-1"
                               onChange={() => this.handlePresetChange('1', 60)}
                               checked={selectedOption === '1'}
                               className="form-radio" type="radio" name="count-value" value="1"/> {t.oneMin}</label>
                    <label htmlFor="timer-option-timeframe-2">
                        <input id="timer-option-timeframe-2"
                               onChange={() => this.handlePresetChange('10', 600)}
                               checked={selectedOption === '10'}
                               className="form-radio" type="radio" name="count-value" value="10"/> {t.tenMin}</label>
                    <label htmlFor="timer-option-timeframe-3">
                        <input id="timer-option-timeframe-3"
                               onChange={() => this.handlePresetChange('50', 3000)}
                               checked={selectedOption === '50'}
                               className="form-radio" type="radio" name="count-value" value="50"/> {t.fiftyMin}</label>
                    <label htmlFor="timer-option-timeframe-4">
                        <input id="timer-option-timeframe-4"
                               onChange={() => this.handlePresetChange('60', 3600)}
                               checked={selectedOption === '60'}
                               className="form-radio" type="radio" name="count-value" value="60"/> {t.oneHour}</label>
                    <label htmlFor="timer-option-timeframe-custom" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <input id="timer-option-timeframe-custom"
                               checked={selectedOption === 'custom'}
                               onChange={() => {}}
                               className="form-radio" type="radio" name="count-value" value="custom"/>
                        <input
                            type="number"
                            min="1"
                            className="custom-seconds-input"
                            placeholder={t.customPlaceholder}
                            value={customSeconds}
                            onChange={(e) => this.setState({ customSeconds: e.target.value })}
                            onKeyDown={(e) => { if (e.key === 'Enter') this.commitCustomSeconds(); }}
                            onBlur={() => this.commitCustomSeconds()}
                        />
                    </label>
                </div>
            );
        }

        return ('');
    }
}

export default TimerOptions;
