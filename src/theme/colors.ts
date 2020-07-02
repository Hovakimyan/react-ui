import { hexToRgbA } from 'helpers'
import { ColorTypes } from './types'

const regularColors = {
    white: '#FFFFFF',
    black: '#000000',
    green: '#4FDC6F',
    purple: '#766DE8',
    yellow: '#F7CF06',
    coral: '#F37C6A',
    cyan: '#4FCEFF',
    red: '#FF4C4C',
}

export const light: ColorTypes = {
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
}

export const dark: ColorTypes = {
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
}

export const getButtonStyles = (colors: ColorTypes) => ({
    disabled: {
        color: colors.secondarySemiLight,
        shadow: 'none',
        normal: `linear-gradient(0, ${colors.secondaryUltraLight} 0%, ${colors.secondaryExtraLight} 100%)`,
        hover: `linear-gradient(0, ${colors.secondaryUltraLight} 0%, ${colors.secondaryExtraLight} 100%)`,
        active: `linear-gradient(0, ${colors.secondaryUltraLight} 0%, ${colors.secondaryExtraLight} 100%)`,
    },
    primary: {
        color: colors.white,
        shadow: `0px 3px 9px 0px ${hexToRgbA(colors.primaryDark, 50)}`,
        normal: `linear-gradient(0, ${colors.primaryDark} 0%, ${colors.primarySemiDark} 100%)`,
        hover: `linear-gradient(0, ${colors.primaryExtraDark} 0%, ${colors.primaryDark} 100%)`,
        active: `linear-gradient(0, ${colors.primaryExtraDark} 0%, ${colors.primaryDark} 100%)`,
    },
    transparent: {
        color: colors.primaryDark,
        shadow: 'none',
        normal: 'transparent',
        hover: hexToRgbA(colors.primaryDark, 10),
        active: hexToRgbA(colors.primaryDark, 20),
    },
})

export const getCardShadow = (colors: ColorTypes) => ({
    shallow: `0px 6px 12px 0px ${hexToRgbA(colors.primaryExtraDark, 10)};`,
    dense: `0px 3px 6px 0px ${hexToRgbA(colors.primaryExtraDark, 20)};`,
})

export const getInputColors = (colors: ColorTypes) => ({
    border: {
        active: colors.secondary,
        disabled: colors.secondaryExtraLight,
    },
    label: {
        active: colors.secondaryDark,
        disabled: colors.secondarySemiDark,
    },
    text: {
        active: colors.secondaryDark,
        disabled: colors.secondarySemiDark,
    },
    background: {
        active: colors.white,
        disabled: colors.secondaryUltraLight,
    },
})
