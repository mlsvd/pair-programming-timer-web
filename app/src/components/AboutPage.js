import React from "react";

class AboutPage extends React.Component {
    render () {
        return (
            <div className="text-center" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}>
                <div style={{
                    maxWidth: 'min(42em, 90vw)',
                    width: '100%'
                }}>
                    <a data-tooltip-id="instructions">
                        Help / About
                    </a>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        marginTop: '1rem'
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                            margin: '0.5rem 0'
                        }}>Pair Programming Timekeeper</h2>
                        <span style={{
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            lineHeight: '1.6'
                        }}>The app offers flexible time intervals catering to the dynamic nature of pair programming sessions.</span>
                        <span style={{
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            lineHeight: '1.6'
                        }}>Users can choose from intervals of 1 minute, 10 minutes, 50 minutes, and 1 hour to structure their collaborative coding sessions.</span>
                        <span style={{
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            lineHeight: '1.6'
                        }}>Pair programming sessions often benefit from periodic breaks to maintain productivity and engagement.</span>
                        <span style={{
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            lineHeight: '1.6'
                        }}>The app helps teams to switch roles between the driver and navigator, fostering a balanced and effective collaboration rhythm.</span>
                    </div>
                    <hr style={{
                        margin: '2rem 0',
                        borderColor: 'rgba(255, 255, 255, 0.3)'
                    }} />
                    <a href="/" style={{
                        fontSize: 'clamp(14px, 2vw, 16px)'
                    }}>Back</a>
                </div>
            </div>
        );
    }
}

export default AboutPage;
