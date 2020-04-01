import React from 'react'
import { Button } from './index'
import Theme from 'theme'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'

const stories = storiesOf('Atoms|Button', module)

stories.addDecorator(withKnobs)
stories.addDecorator(jsxDecorator)

stories.add('Default', () => (
    <Theme>
        <Button>Hello Button</Button>
    </Theme>
))
