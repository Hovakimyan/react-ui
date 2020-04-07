// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Paper = (props: Props) => {
    const { className = '', corner = 'rounded', shadow = 'shallow' } = props
    return (
        <Styled.Paper className={className} corner={corner} shadow={shadow}>
            {props.children}
        </Styled.Paper>
    )
}

export default Paper
