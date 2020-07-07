// @flow

import React, { ReactElement } from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Input = ({
    onChange,
    value,
    placeholder = '',
    size = 'medium',
    disabled = false,
    isFlat = false,
    isFit = false,
}: Props): ReactElement => {
    return (
        <Styled.Input
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            size={size}
            disabled={disabled}
            isFlat={isFlat}
            isFit={isFit}
        />
    )
}

export default Input
