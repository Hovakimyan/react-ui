import * as sizes from './sizes'

export const buttonTypeOptions: {
    [key: string]: ThemeColorTypes
} = {
    primary: 'primary',
    transparent: 'transparent',
}

export const iconNameOptions: {
    [key: string]: TIconNames
} = {
    domain: 'domain',
    email: 'email',
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

export const cornerOptions: {
    [key in 'Rounded' | 'Sharp']: ICardsCorners
} = {
    Rounded: 'rounded',
    Sharp: 'sharp',
}

export const shadowOptions: {
    [key in 'Dense' | 'Shallow']: ICardsShadows
} = {
    Dense: 'dense',
    Shallow: 'shallow',
}

export const headingOptions: {
    [key in 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6']: HeadingTypes
} = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
}

export const colorOptions: {
    [key in IGlobalColors]: IGlobalColors
} = {
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
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fontSizeOptions: any = Object.keys(sizes.fontSizes).reduce(
    (acc: { [key: string]: string }, item: string) => {
        acc[item] = item
        return acc
    },
    {
        None: '',
    }
)
