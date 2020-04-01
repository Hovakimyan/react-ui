
            import React from 'react'
import { Button } from './index'
import Theme from 'theme'
import { fontSizeOptions, globalColorOptions } from 'constants/options'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

const stories = storiesOf('Atoms|Button', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => (
    <Theme>
    <Button>Hello Button</Button>
    </Theme>
))
            
            