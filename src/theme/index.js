// @flow

import React from 'react'
import * as sizes from './sizes'
import type { Props, ThemeTypes } from './types'
import { themeOptions } from 'constants/options'
import {
    light,
    dark,
    getButtonStyles,
    getInputColors,
    getCardShadow
} from './colors'
import { ThemeProvider } from 'styled-components'
import ScrollBarStyles from './styles/scroll-bar'
import ResetCss from './styles/reset-css'
import { boolean, select } from '@storybook/addon-knobs'

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
            shadow: getCardShadow(colors),
            corner: sizes.cardCorner
        }
    }
}

const Theme = ({ children }: Props) => {
    return (
        <ThemeProvider
            isFlat={boolean('Is Flat Design', false)}
            theme={getTheme(select('Theme', themeOptions, 'light'))}
        >
            <ScrollBarStyles />
            <ResetCss />
            {children}
        </ThemeProvider>
    )
}

export default Theme
