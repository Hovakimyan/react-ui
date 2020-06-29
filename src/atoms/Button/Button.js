// @flow

import React from 'react'
import * as Styled from './styled'
import { emptyFunction } from 'helpers'

type Props = {
    /** 'primary' | 'transparent' */
    type: ThemeColorTypes,
    /** 'small' | 'medium' | 'large' */
    size: SizeTypes,
    onClick: Function,
    children: React$Node,
    refHandler?: Function,
    disabled?: boolean,
    isFlat?: boolean,
    isFit?: boolean,
}

const Button = ({
    type = 'primary',
    size = 'medium',
    onClick = emptyFunction,
    children,
    refHandler = () => {},
    disabled = false,
    isFlat = false,
    isFit = false,
    ...rest
}: Props) => {
    const clickHandler = (event: Event): void => {
        if (!disabled) {
            onClick(event)
        }
    }

    return (
        <Styled.Button
            {...rest}
            ref={refHandler}
            size={size}
            isFit={isFit}
            onClick={clickHandler}
            disabled={disabled}
            type={type}
            isFlat={isFlat}
        >
            {children}
        </Styled.Button>
    )
}

export default Button
