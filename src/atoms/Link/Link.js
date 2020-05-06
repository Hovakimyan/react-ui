// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Link = ({
    href,
    target = '_self',
    children,
    ...rest
}: Props): React$Node => {
    return (
        <Styled.Link {...rest} href={href} target={target}>
            {children}
        </Styled.Link>
    )
}

export default Link
