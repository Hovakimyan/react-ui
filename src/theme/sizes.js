import { sizes } from 'consts'

export const fontSizes = sizes.fontSizes
export const iconSizes = sizes.iconSizes

export const button = {
    small: {
        fontSize: fontSizes.small,
        height: '38px',
        padding: '0 20px',
        circlePadding: '10px',
        borderRadius: '20px'
    },
    medium: {
        fontSize: fontSizes.medium,
        height: '44px',
        padding: '0 30px',
        circlePadding: '15px',
        borderRadius: '30px'
    },
    large: {
        fontSize: fontSizes.large,
        height: '50px',
        padding: '0 40px',
        circlePadding: '20px',
        borderRadius: '40px'
    }
}

export const inputs = {
    small: {
        fontSize: fontSizes.small,
        height: '38px',
        padding: '0 5px',
        borderRadius: '20px'
    },
    medium: {
        fontSize: fontSizes.medium,
        height: '44px',
        padding: '0 10px',
        borderRadius: '22px'
    },
    large: {
        fontSize: fontSizes.large,
        height: '50px',
        padding: '0 15px',
        borderRadius: '25px'
    }
}

export const cardCorner = {
    rounded: '10px',
    sharp: 0
}
