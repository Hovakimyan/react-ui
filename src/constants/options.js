import { colors, sizes } from 'constants/index'

export const buttonTypeOptions = {
    primary: 'primary',
    secondary: 'secondary',
    Info: 'info',
    Default: 'default',
    Success: 'success',
    warning: 'warning',
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
