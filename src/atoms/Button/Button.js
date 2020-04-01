// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Button = ({
    type,
    size,
    onClick,
    children,
    refHandler = () => {},
    className = '',
    disabled = false,
    isFlat = false,
    fit = false,
    ...rest
}: Props) => {
    const clickHandler = (event: Event): void => {
        if (!disabled) {
            onClick(event)
        }
    }

    return (
        <Styled.Button
            ref={refHandler}
            className={className}
            size={size}
            fit={fit}
            onClick={clickHandler}
            disabled={disabled}
            type={type}
            isFlat={isFlat}
            {...rest}
        >
            {children}
        </Styled.Button>
    )
}

export default Button
