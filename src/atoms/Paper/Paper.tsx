import React, { ReactElement } from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Paper = ({
    corner = 'rounded',
    shadow = 'shallow',
    children,
    ...rest
}: Props): ReactElement => (
    <Styled.Paper {...rest} corner={corner} shadow={shadow}>
        {children}
    </Styled.Paper>
)

export default Paper
