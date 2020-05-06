import { sizes } from 'consts/index'

export const buttonTypeOptions = {
    primary: 'primary',
    transparent: 'transparent'
}

export const buttonSizeOptions = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large'
}

export const themeOptions = {
    Light: 'light',
    Dark: 'dark'
}

export const cornerOptions = {
    Rounded: 'rounded',
    Sharp: 'sharp'
}

export const shadowOptions = {
    Dense: 'dense',
    Shallow: 'shallow'
}

export const headingOptions = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6'
}

export const colorOptions = {
    primaryExtraDark: 'primaryExtraDark',
    primaryDark: 'primaryDark',
    primarySemiDark: 'primarySemiDark',
    primary: 'primary',
    primarySemiLight: 'primarySemiLight',
    primaryLight: 'primaryLight',
    primaryExtraLight: 'primaryExtraLight',
    secondaryExtraDark: 'secondaryExtraDark',
    secondaryDark: 'secondaryDark',
    secondarySemiDark: 'secondarySemiDark',
    secondary: 'secondary',
    secondarySemiLight: 'secondarySemiLight',
    secondaryLight: 'secondaryLight',
    secondaryExtraLight: 'secondaryExtraLight',
    secondaryUltraLight: 'secondaryUltraLight',
    white: 'white',
    black: 'black',
    green: 'green',
    purple: 'purple',
    yellow: 'yellow',
    coral: 'coral',
    cyan: 'cyan',
    red: 'red',
    None: ''
}

export const fontSizeOptions = Object.keys(sizes.fontSizes).reduce(
    (acc, item) => {
        acc[item] = item
        return acc
    },
    {
        None: ''
    }
)

export const iconSizeOptions = Object.keys(sizes.iconSizes).reduce(
    (acc, item) => {
        acc[item] = item
        return acc
    },
    {
        None: ''
    }
)
