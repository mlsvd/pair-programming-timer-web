import React from 'react'

class TimerOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customSeconds: '',
            selectedOption: '10'
        };
    }

    handlePresetChange(value, seconds) {
        this.setState({ selectedOption: value });
        this.props.onCountdownTimeChange(seconds);
    }

    handleCustomCheckboxChange(e) {
        if (e.target.checked) {
            this.setState({ selectedOption: 'custom' });
            const seconds = parseInt(this.state.customSeconds, 10);
            if (!isNaN(seconds) && seconds > 0) {
                this.props.onCountdownTimeChange(seconds);
            }
        } else {
            this.setState({ selectedOption: '10' });
            this.props.onCountdownTimeChange(600);
        }
    }

    handleCustomInputChange(e) {
        const raw = e.target.value;
        this.setState({ customSeconds: raw });
        const seconds = parseInt(raw, 10);
        if (!isNaN(seconds) && seconds > 0) {
            this.props.onCountdownTimeChange(seconds);
        }
    }

    render() {
        if (this.props.status === 'default') {
            const t = this.props.translations.timer;
            const { selectedOption, customSeconds } = this.state;
            const isCustom = selectedOption === 'custom';
            return (
                <div style={{ margin: '1rem 0' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}>
                        <label htmlFor="timer-option-timeframe-1">
                            <input
                                id="timer-option-timeframe-1"
                                onChange={() => this.handlePresetChange('1', 60)}
                                className="form-radio" type="radio" name="count-value"
                                value="1"
                                checked={selectedOption === '1'}
                            /> {t.oneMin}
                        </label>
                        <label htmlFor="timer-option-timeframe-2">
                            <input
                                id="timer-option-timeframe-2"
                                onChange={() => this.handlePresetChange('10', 600)}
                                className="form-radio" type="radio" name="count-value"
                                value="10"
                                checked={selectedOption === '10'}
                            /> {t.tenMin}
                        </label>
                        <label htmlFor="timer-option-timeframe-3">
                            <input
                                id="timer-option-timeframe-3"
                                onChange={() => this.handlePresetChange('50', 3000)}
                                className="form-radio" type="radio" name="count-value"
                                value="50"
                                checked={selectedOption === '50'}
                            /> {t.fiftyMin}
                        </label>
                        <label htmlFor="timer-option-timeframe-4">
                            <input
                                id="timer-option-timeframe-4"
                                onChange={() => this.handlePresetChange('60', 3600)}
                                className="form-radio" type="radio" name="count-value"
                                value="60"
                                checked={selectedOption === '60'}
                            /> {t.oneHour}
                        </label>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '0.75rem'
                    }}>
                        <label htmlFor="timer-option-custom-checkbox" style={{ cursor: 'pointer' }}>
                            <input
                                id="timer-option-custom-checkbox"
                                type="checkbox"
                                checked={isCustom}
                                onChange={(e) => this.handleCustomCheckboxChange(e)}
                                style={{ marginRight: '0.4rem' }}
                            />
                            {t.customLabel || 'Custom value in seconds'}
                        </label>
                        {isCustom && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <label htmlFor="timer-custom-input">{t.customInputLabel || 'Seconds:'}</label>
                                <input
                                    id="timer-custom-input"
                                    type="number"
                                    min="1"
                                    value={customSeconds}
                                    onChange={(e) => this.handleCustomInputChange(e)}
                                    style={{ width: '90px' }}
                                    autoFocus
                                />
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return ('');
    }
}

export default TimerOptions;
