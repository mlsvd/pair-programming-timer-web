import React from 'react';
import themes from '../themes';

class ThemeSelector extends React.Component {
    render() {
        const themeList = Object.keys(themes).map(key => ({
            id: key,
            ...themes[key]
        }));

        return (
            <div className="theme-selector">
                <select
                    value={this.props.currentTheme}
                    onChange={(e) => this.props.onThemeChange(e.target.value)}
                    className="theme-dropdown"
                    aria-label="Select theme"
                >
                    {themeList.map(theme => (
                        <option key={theme.id} value={theme.id}>
                            {theme.icon} {theme.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default ThemeSelector;
