// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Paper = (props: Props) => {
    const { corner = 'rounded', shadow = 'shallow', ...rest } = props
    return (
        <Styled.Paper {...rest} corner={corner} shadow={shadow}>
            {props.children}
        </Styled.Paper>
    )
}

export default Paper
