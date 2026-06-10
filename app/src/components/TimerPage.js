import React from "react";
import Title from "./Title";
import Timer from "./Timer";
import HelpModal from "./HelpModal";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import translations from "../translations";
import themes from "../themes";

function readStorage(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch { /* Safari private mode */ }
}

class TimerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            currentLanguage: readStorage('appLanguage', 'en'),
            currentTheme: readStorage('appTheme', 'dark')
        };
    }

    componentDidMount() {
        this.applyTheme(this.state.currentTheme);
    }

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    handleLanguageChange(languageCode) {
        this.setState({ currentLanguage: languageCode });
        writeStorage('appLanguage', languageCode);
    }

    handleThemeChange(themeId) {
        this.setState({ currentTheme: themeId });
        writeStorage('appTheme', themeId);
        this.applyTheme(themeId);
    }

    applyTheme(themeId) {
        const theme = themes[themeId];
        if (!theme) return;

        const root = document.documentElement;
        Object.keys(theme.colors).forEach(key => {
            root.style.setProperty(`--${key}`, theme.colors[key]);
        });

        // Set data-theme attribute for theme-specific styles
        document.body.setAttribute('data-theme', themeId);
    }

    render () {
        const t = translations[this.state.currentLanguage];

        return (
            <div className="text-center" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                position: 'relative'
            }}>
                <ThemeSelector
                    currentTheme={this.state.currentTheme}
                    onThemeChange={(theme) => this.handleThemeChange(theme)}
                />
                <LanguageSelector
                    currentLanguage={this.state.currentLanguage}
                    onLanguageChange={(lang) => this.handleLanguageChange(lang)}
                />
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main role="main" className="App inner cover">
                        <Title translations={t} />
                        <Timer translations={t} />
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                this.openModal();
                            }}
                            style={{
                                marginTop: '1rem',
                                display: 'inline-block',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                cursor: 'pointer'
                            }}
                        >{t.help.link}</a>
                    </main>
                </div>
                <HelpModal
                    isOpen={this.state.isModalOpen}
                    onClose={() => this.closeModal()}
                    translations={t}
                />
            </div>
        )
    }
}

export default TimerPage;