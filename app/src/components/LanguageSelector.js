import React from 'react';

class LanguageSelector extends React.Component {
    render() {
        const languages = [
            { code: 'en', name: 'English', flag: '🇬🇧' },
            { code: 'ja', name: '日本語', flag: '🇯🇵' },
            { code: 'it', name: 'Italiano', flag: '🇮🇹' }
        ];

        return (
            <div className="language-selector">
                <select
                    value={this.props.currentLanguage}
                    onChange={(e) => this.props.onLanguageChange(e.target.value)}
                    className="language-dropdown"
                    aria-label="Select language"
                >
                    {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>
                            {lang.flag} {lang.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default LanguageSelector;
