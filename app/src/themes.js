const themes = {
  dark: {
    name: 'Dark',
    icon: '🌙',
    colors: {
      background: 'linear-gradient(to bottom right, #111, #333)',
      textPrimary: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.9)',
      textShadow: '0 .05rem .1rem rgba(0, 0, 0, .5)',
      buttonBg: '#c72544',
      buttonBgHover: '#ba2340',
      buttonBgHoverIcon: '#da3655',
      linkColor: '#fff',
      modalBg: 'linear-gradient(135deg, rgba(40, 44, 52, 0.98) 0%, rgba(61, 66, 77, 0.98) 100%)',
      modalBorder: 'rgba(255, 255, 255, 0.1)',
      dropdownBg: 'rgba(40, 44, 52, 0.9)',
      dropdownBorder: 'rgba(255, 255, 255, 0.2)',
      dropdownHoverBg: 'rgba(50, 54, 62, 0.95)',
      radioBg: '#f1f1f1',
      radioCheckedBg: '#ff3855',
      radioColor: '#666',
      radioCheckedColor: '#fff',
      pulseColor: '#FDDD5B',
      bodyBoxShadow: 'inset 0 0 5rem rgba(0, 0, 0, .5)'
    }
  },
  light: {
    name: 'Light',
    icon: '☀️',
    colors: {
      background: 'linear-gradient(to bottom right, #a8edea, #fed6e3)',
      textPrimary: '#2d3748',
      textSecondary: '#4a5568',
      textShadow: '0 .05rem .1rem rgba(255, 255, 255, .8)',
      buttonBg: '#4299e1',
      buttonBgHover: '#3182ce',
      buttonBgHoverIcon: '#5ab3f5',
      linkColor: '#2d3748',
      modalBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 245, 250, 0.98) 100%)',
      modalBorder: 'rgba(0, 0, 0, 0.1)',
      dropdownBg: 'rgba(255, 255, 255, 0.95)',
      dropdownBorder: 'rgba(0, 0, 0, 0.2)',
      dropdownHoverBg: 'rgba(255, 255, 255, 1)',
      radioBg: '#e2e8f0',
      radioCheckedBg: '#4299e1',
      radioColor: '#4a5568',
      radioCheckedColor: '#fff',
      pulseColor: '#ed8936',
      bodyBoxShadow: 'inset 0 0 5rem rgba(0, 0, 0, .1)'
    }
  },
  msdos: {
    name: 'MS-DOS',
    icon: '💻',
    colors: {
      background: '#000000',
      textPrimary: '#00ff00',
      textSecondary: '#00ff00',
      textShadow: '0 0 5px #00ff00',
      buttonBg: '#000000',
      buttonBgHover: '#003300',
      buttonBgHoverIcon: '#00cc00',
      linkColor: '#00ff00',
      modalBg: 'rgba(0, 0, 0, 0.95)',
      modalBorder: '#00ff00',
      dropdownBg: '#000000',
      dropdownBorder: '#00ff00',
      dropdownHoverBg: '#003300',
      radioBg: '#001100',
      radioCheckedBg: '#00ff00',
      radioColor: '#00ff00',
      radioCheckedColor: '#000000',
      pulseColor: '#00ff00',
      bodyBoxShadow: 'none'
    }
  }
};

export default themes;
