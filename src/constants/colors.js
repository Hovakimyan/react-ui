export const globalColors = {
    white: '#FFFFFF',
    black: '#000000',
    warningColor: '#E79E00',
    secondaryExtraDark: '#252E48',
    secondaryDark: '#363F5A',
    secondarySemiDark: '#545F7E',
    secondary: '#7683A8',
    secondarySemiLight: '#9AA6C8',
    secondaryLight: '#C1C9E0',
    secondaryExtraLight: '#DEE3F0',
    secondaryUltraLight: '#EDEFF6',
    primaryExtraDark: '#0052E0',
    primaryDark: '#387DFF',
    primarySemiDark: '#5690FF',
    primary: '#B9CFFF',
    primarySemiLight: '#CFE0FF',
    primaryLight: '#EEF5FF',
    primaryExtraLight: '#F5FAFE',
    inputBorder: '#DDE3F0',
    inputLabel: '#7683A7',
    inputText: '#545F7D',
    green: '#4FDC6F',
    purple: '#766DE8',
    yellow: '#F7CF06',
    coral: '#F37C6A',
    cyan: '#4FCEFF',
    red: '#FF4C4C',
    aliceBlue: '#EAF2FF'
}

export const gradients = {
    checkbox: 'linear-gradient(0, #387DFF 0%, #5690FF 100%)'
}

export const buttons = {
    disabled: {
        color: '#9CA3B7',
        gradient: 'linear-gradient(0, #EDEFF6 0%, #DEE3F0 100%)'
    },
    primary: {
        color: '#FFFFFF',
        shadow: '0px 3px 9px 0px rgba(243,124,108,0.5)',
        normal: 'linear-gradient(0, #F07379 0%, #FFA330 100%)',
        hover: 'linear-gradient(0, #FF7E84 0%, #FFB04E 100%)',
        active: 'linear-gradient(0, #FE6A71 0%, #FF991A 100%)'
    },
    secondary: {
        color: '#FFFFFF',
        shadow: '0px 3px 9px 0px rgba(56,125,255,0.5)',
        normal: 'linear-gradient(0, #387DFF 0%, #5690FF 100%)',
        hover: 'linear-gradient(0, #518DFF 0%, #6EA0FF 100%)',
        active: 'linear-gradient(0, #206CFD 0%, #4D88F9 100%)'
    },
    default: {
        color: '#545F7D',
        shadow: '0px 3px 9px -5px rgba(0,82,224,0.5);',
        normal: 'linear-gradient(0, #F5FAFE 0%, #FFFFFF 100%)',
        hover: 'linear-gradient(0, #FFFFFF 0%, #FFFFFF 100%)',
        active: 'linear-gradient(0, #E9F5FF 0%, #FFFFFF 100%)'
    },
    info: {
        color: '#FFFFFF',
        shadow: '0px 3px 9px 0px rgba(118,109,232,0.5)',
        normal: 'linear-gradient(0, #766DE8 0%, #9C95FF 100%)',
        hover: 'linear-gradient(0, #9B94FC 0%, #B5AFFF 100%)',
        active: 'linear-gradient(0, #655BE2 0%, #8C83F7 100%)'
    },
    success: {
        color: '#FFFFFF',
        shadow: '0px 3px 9px 0px rgba(79,220,111,0.5)',
        normal: 'linear-gradient(0, #4FDC6F 0%, #6BEB88 100%)',
        hover: 'linear-gradient(0, #31DE84 0%, #67FC89 100%)',
        active: 'linear-gradient(0, #05C562 0%, #41F169 100%)'
    },
    warning: {
        color: '#FFFFFF',
        shadow: '0px 3px 9px 0px rgba(255,76,76,0.5)',
        normal: 'linear-gradient(0, #FF4141 0%, #FF706B 100%)',
        hover: 'linear-gradient(0, #FF5A5A 0%, #FF8170 100%)',
        active: 'linear-gradient(0, #FF2B2B 0%, #FF5F59 100%)'
    },
    transparent: {
        color: globalColors.primaryDark,
        normal: 'transparent',
        hover: 'linear-gradient(0, #E9F5FF 0%, #FFFFFF 100%)',
        active: 'linear-gradient(0, #E9F5FF 0%, #E9F5FF 100%)'
    }
}

export const toolTip = {
    default: {
        color: globalColors.white,
        shadow: '0px 3px 6px 0px rgba(37, 46, 72, 0.3);',
        backgroundColor: globalColors.secondarySemiDark
    },
    primary: {
        color: globalColors.secondarySemiDark,
        shadow: '0px 6px 12px 0px rgba(0, 82, 224, 0.1);',
        backgroundColor: globalColors.white
    },
    secondary: {
        color: globalColors.white,
        shadow: '0px 3px 9px 0px rgba(118, 109, 232, 0.5);',
        backgroundColor: globalColors.purple
    }
}

export const flyOutToolTip = {
    shadow: {
        top: '0px 3px 12px 0px rgba(0, 82, 224, 0.1);',
        left: '3px 0px 12px 0px rgba(0, 82, 224, 0.1);',
        bottom: '0px -3px 12px 0px rgba(0, 82, 224, 0.1);',
        right: '-3px 0px 12px 0px rgba(0, 82, 224, 0.1);'
    },
    default: {
        backgroundColor: globalColors.secondarySemiDark
    },
    primary: {
        backgroundColor: globalColors.white
    },
    secondary: {
        backgroundColor: globalColors.purple
    }
}
