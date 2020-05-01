import React from 'react'
import Icon from './index'
import Theme from 'theme'
import { iconDefaults } from './Icon'
import { StyledContainer, StyledIconItem } from './styled-stories'
import { iconSizeOptions, colorOptions } from 'consts/options'
import { iconNames } from '@hovakimyan/icons'

import { storiesOf, addDecorator, setAddon } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import JSXAddon from 'storybook-addon-jsx'

setAddon(JSXAddon)

addDecorator(withA11y)

const stories = storiesOf('Atoms|Icon', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

export const iconNameOptions = iconNames.reduce((acc, item) => {
    acc[item] = item
    return acc
}, {})

const sizeOptions = {
    ...iconSizeOptions,
    '40': 40,
    '60': 60
}

// Knobs for React props
stories.addWithJSX('Icon', () => (
    <Theme>
        <Icon
            color={select('Color', colorOptions, iconDefaults.color)}
            name={select('Name', iconNameOptions, 'accessibility')}
            size={select('Size', sizeOptions, iconDefaults.size)}
        />
    </Theme>
))

stories.add('Icons list', () => (
    <Theme>
        <StyledContainer>
            {iconNames.map(item => {
                return (
                    <StyledIconItem key={item}>
                        {item}
                        <Icon name={item} size="huge" color="primaryDark" />
                    </StyledIconItem>
                )
            })}
        </StyledContainer>
    </Theme>
))
