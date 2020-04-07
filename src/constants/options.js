import { colors, sizes } from 'constants/index'

export const buttonTypeOptions = {
    primary: 'primary',
    transparent: 'transparent'
}

export const toolTipTypeOptions = {
    primary: 'primary',
    secondary: 'secondary',
    default: 'default'
}

export const buttonSizeOptions = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large'
}

export const inputOptions = {
    Email: 'email',
    Text: 'text',
    Password: 'password',
    Number: 'number',
    Tel: 'tel'
}

export const rangeSliderStyleOptions = {
    light: 'light',
    dark: 'dark'
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

export const globalColorOptions = Object.keys(colors.globalColors).reduce(
    (acc, item) => {
        acc[item] = item
        return acc
    },
    {
        None: ''
    }
)
