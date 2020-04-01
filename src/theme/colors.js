import { hexToRgbA } from 'helpers/color'

const regularColors = {
    white: '#FFFFFF',
    black: '#000000',
    green: '#4FDC6F',
    purple: '#766DE8',
    yellow: '#F7CF06',
    coral: '#F37C6A',
    cyan: '#4FCEFF',
    red: '#FF4C4C'
}

export const light = {
    ...regularColors,
    // primary
    primaryExtraDark: '#0052E0',
    primaryDark: '#387DFF',
    primarySemiDark: '#5690FF',
    primary: '#B9CFFF',
    primarySemiLight: '#CFE0FF',
    primaryLight: '#EEF5FF',
    primaryExtraLight: '#F5FAFE',
    // secondary
    secondaryExtraDark: '#252E48',
    secondaryDark: '#363F5A',
    secondarySemiDark: '#545F7E',
    secondary: '#7683A8',
    secondarySemiLight: '#9AA6C8',
    secondaryLight: '#C1C9E0',
    secondaryExtraLight: '#DEE3F0',
    secondaryUltraLight: '#EDEFF6',
    // input
    inputBorder: '#DDE3F0',
    inputLabel: '#7683A7',
    inputText: '#545F7D'
}

export const dark = {
    ...regularColors,
    // primary
    primaryExtraDark: '#0052E0',
    primaryDark: '#387DFF',
    primarySemiDark: '#5690FF',
    primary: '#B9CFFF',
    primarySemiLight: '#CFE0FF',
    primaryLight: '#EEF5FF',
    primaryExtraLight: '#F5FAFE',
    // secondary
    secondaryExtraDark: '#252E48',
    secondaryDark: '#363F5A',
    secondarySemiDark: '#545F7E',
    secondary: '#7683A8',
    secondarySemiLight: '#9AA6C8',
    secondaryLight: '#C1C9E0',
    secondaryExtraLight: '#DEE3F0',
    secondaryUltraLight: '#EDEFF6',
    // input
    inputBorder: '#DDE3F0',
    inputLabel: '#7683A7',
    inputText: '#545F7D'
}

export const getButtonStyles = colors => ({
    disabled: {
        color: colors.secondarySemiLight,
        shadow: 'none',
        normal: `linear-gradient(0, ${colors.secondaryUltraLight} 0%, ${colors.secondaryExtraLight} 100%)`,
        hover: `linear-gradient(0, ${colors.secondaryUltraLight} 0%, ${colors.secondaryExtraLight} 100%)`,
        active: `linear-gradient(0, ${colors.secondaryUltraLight} 0%, ${colors.secondaryExtraLight} 100%)`
    },
    primary: {
        color: colors.white,
        shadow: '0px 3px 9px 0px rgba(56,125,255,0.5)',
        normal: `linear-gradient(0, ${colors.primaryDark} 0%, ${colors.primarySemiDark} 100%)`,
        hover: `linear-gradient(0, ${colors.primaryExtraDark} 0%, ${colors.primaryDark} 100%)`,
        active: `linear-gradient(0, ${colors.primaryExtraDark} 0%, ${colors.primaryDark} 100%)`
    },
    transparent: {
        color: colors.primaryDark,
        shadow: 'none',
        normal: 'transparent',
        hover: hexToRgbA(colors.primaryDark, 10),
        active: hexToRgbA(colors.primaryDark, 20)
    }
})
