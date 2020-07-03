import * as sizes from './sizes'

export const buttonTypeOptions: {
    [key: string]: ThemeColorTypes
} = {
    primary: 'primary',
    transparent: 'transparent',
}

export const buttonSizeOptions: {
    [key: string]: SizeTypes
} = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
}

export const themeOptions: {
    [key: string]: ThemeTypes
} = {
    Light: 'light',
    Dark: 'dark',
}

export const cornerOptions = {
    Rounded: 'rounded',
    Sharp: 'sharp',
}

export const shadowOptions = {
    Dense: 'dense',
    Shallow: 'shallow',
}

export const headingOptions = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
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
    None: '',
}

export const fontSizeOptions = Object.keys(sizes.fontSizes).reduce(
    (acc: { [key: string]: string }, item: string) => {
        acc[item] = item
        return acc
    },
    {
        None: '',
    },
)

export const iconSizeOptions = Object.keys(sizes.iconSizes).reduce(
    (acc: { [key: string]: string }, item: string) => {
        acc[item] = item
        return acc
    },
    {
        None: '',
    },
)
