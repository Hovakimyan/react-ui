// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Button = (props: Props) => {
    return <Styled.Button>{props.children}</Styled.Button>
}

export default Button
