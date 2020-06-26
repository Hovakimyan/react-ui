import React from 'react'
import { Heading } from './index'
import Theme from 'theme'
import { storiesOf } from '@storybook/react'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'
import {
    headingOptions,
    colorOptions,
    fontSizeOptions,
} from '../../consts/options'

const stories = storiesOf('Atoms|Heading', module)

stories.addDecorator(withKnobs)
stories.addDecorator(jsxDecorator)

stories.add('Default', () => (
    <Theme>
        <Heading
            tag={select('Heading', headingOptions, 'h1')}
            ellipsis={boolean('Ellipsis', false)}
            noSelect={boolean('Disable Select', false)}
            color={select('Color', colorOptions, 'primaryDark')}
            size={select('Size', fontSizeOptions, 'medium')}
        >
            Hello Heading
        </Heading>
    </Theme>
))
