import React from 'react'
import { Text } from './index'
import Theme from 'theme'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Atoms|Text', module)

stories
    .add('Default', () => (
        <Theme>
            <Text>Hello Button</Text>
        </Theme>
    ))
    .add('Second', () => <Text>Hello Button</Text>)
