// @flow

import React, { useState } from 'react'
import * as sizes from './sizes'
import type { Props, ThemeTypes } from './types'
import {
    light,
    dark,
    getButtonStyles,
    getInputColors,
    cardShadow
} from './colors'
import { ThemeProvider } from 'styled-components'
import ScrollBarStyles from './styles/scroll-bar'
import ResetCss from './styles/reset-css'

const themes = {
    light,
    dark
}

const getTheme = (theme: ThemeTypes) => {
    const colors = themes[theme]
    return {
        fonts: {
            sizes: sizes.font
        },
        colors: colors,
        inputs: {
            sizes: sizes.inputs,
            colors: getInputColors(colors)
        },
        buttons: {
            sizes: sizes.button,
            colors: getButtonStyles(colors)
        },
        cards: {
            shadow: cardShadow,
            corner: sizes.cardCorner
        }
    }
}

const Theme = ({ children }: Props) => {
    const [light, setTheme] = useState<ThemeTypes>('light')
    return (
        <ThemeProvider
            selectedTheme={light}
            setTheme={setTheme}
            theme={getTheme(light)}
        >
            <ScrollBarStyles />
            <ResetCss />
            {children}
        </ThemeProvider>
    )
}

export default Theme
