// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Heading = (props: Props) => {
    return <Styled.Heading>{props.children}</Styled.Heading>
}

export default Heading
