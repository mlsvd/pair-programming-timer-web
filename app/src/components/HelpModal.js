import React from 'react';

class HelpModal extends React.Component {
    handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        if (!this.props.isOpen) {
            return null;
        }

        const t = this.props.translations.help;

        return (
            <div className="modal-backdrop" onClick={(e) => this.handleBackdropClick(e)}>
                <div className="modal-content">
                    <button className="modal-close" onClick={this.props.onClose}>
                        &times;
                    </button>
                    <div className="modal-body">
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                            margin: '0.5rem 0 1.5rem 0'
                        }}>{t.title}</h2>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            textAlign: 'left'
                        }}>
                            <p style={{
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                lineHeight: '1.6',
                                margin: '0'
                            }}>{t.paragraph1}</p>
                            <p style={{
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                lineHeight: '1.6',
                                margin: '0'
                            }}>{t.paragraph2}</p>
                            <p style={{
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                lineHeight: '1.6',
                                margin: '0'
                            }}>{t.paragraph3}</p>
                            <p style={{
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                lineHeight: '1.6',
                                margin: '0'
                            }}>{t.paragraph4}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HelpModal;
