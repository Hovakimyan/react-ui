// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Input = ({
    onChange,
    value,
    size = 'medium',
    refHandler = () => {},
    className = '',
    disabled = false,
    isFlat = false,
    isFit = false,
    ...rest
}: Props) => {
    return (
        <Styled.Input
            {...rest}
            onChange={onChange}
            value={value}
            ref={refHandler}
            className={className}
            size={size}
            disabled={disabled}
            isFlat={isFlat}
            isFit={isFit}
        />
    )
}

export default Input
