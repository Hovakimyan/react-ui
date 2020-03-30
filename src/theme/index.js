// @flow

import React, { useState } from 'react'
import sizes from './sizes'
import type { Props, ThemeTypes } from './types'
import { light, dark } from './colors'
import { ThemeProvider } from 'styled-components'

const themes = {
    light,
    dark
}

const getTheme = (theme: ThemeTypes) => ({
    sizes,
    colors: themes[theme]
})

const Theme = ({ children }: Props) => {
    const [light, setTheme] = useState<ThemeTypes>('light')
    return (
        <ThemeProvider
            selectedTheme={light}
            setTheme={setTheme}
            theme={getTheme(light)}
        >
            {children}
        </ThemeProvider>
    )
}

export default Theme
