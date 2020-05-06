// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Link = ({
    href,
    target = '_self',
    children,
    className = ''
}: Props): React$Node => {
    return (
        <Styled.Link className={className} href={href} target={target}>
            {children}
        </Styled.Link>
    )
}

export default Link
