// import original module declarations
import 'styled-components'

type IColorTypes = {
    [key in GlobalColorType]: string
}
type IFontSizes = {
    [key in FontSizeType]: string
}
type IIconSizes = {
    [key in IconSizeType]: string
}
type ILoadingSizes = {
    [key in SizeTypes]: number
}
type ICardCorners = {
    rounded: string
    sharp: number
}

type IInputsSizes = {
    [key in SizeTypes]: {
        fontSize: string
        height: string
        padding: string
        borderRadius: string
    }
}
type IButtonSizes = {
    [key in SizeTypes]: {
        fontSize: string
        height: string
        padding: string
        circlePadding: string
        borderRadius: string
    }
}

type IInputColors = {
    [key in 'background' | 'text' | 'label' | 'border']: {
        active: GlobalColorType
        disabled: GlobalColorType
    }
}
type IButtonColors = {
    [key in ButtonTypes]: {
        color: GlobalColorType
        shadow: string
        normal: string
        hover: string
        active: string
    }
}

export type Theme = {
    fonts: {
        sizes: IFontSizes
    }
    icons: {
        sizes: IIconSizes
    }
    loading: {
        sizes: ILoadingSizes
    }
    colors: IColorTypes
    inputs: {
        sizes: IInputsSizes
        colors: IInputColors
    }
    buttons: {
        sizes: IButtonSizes
        colors: IButtonColors
    }
    cards: {
        shadow: ICardsShadows
        corner: ICardCorners
    }
}

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            sizes: IFontSizes
        }
        icons: {
            sizes: IIconSizes
        }
        loading: {
            sizes: ILoadingSizes
        }
        colors: IColorTypes
        inputs: {
            sizes: IInputsSizes
            colors: IInputColors
        }
        buttons: {
            sizes: IButtonSizes
            colors: IButtonColors
        }
        cards: {
            shadow: {
                [key in ICardsShadows]: string
            }
            corner: {
                [key in ICardsCorners]: string | number
            }
        }
    }
}
