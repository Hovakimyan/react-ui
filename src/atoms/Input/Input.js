// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Input = (props: Props) => {
    return <Styled.Input>{props.children}</Styled.Input>
}

export default Input
