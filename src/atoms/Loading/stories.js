import React from 'react'
import { Loading } from './index'
import Theme from 'theme'
import { storiesOf } from '@storybook/react'
import { select, withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'
import { buttonSizeOptions, colorOptions } from '../../consts/options'

const stories = storiesOf('Atoms|Loading', module)

stories.addDecorator(withKnobs)
stories.addDecorator(jsxDecorator)

stories.add('Default', () => (
    <Theme>
        <Loading
            size={select('Size', buttonSizeOptions, 'medium')}
            color={select('Color', colorOptions, 'secondaryExtraDark')}
        />
    </Theme>
))
