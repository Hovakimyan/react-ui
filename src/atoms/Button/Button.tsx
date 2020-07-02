// @flow

import React, {ReactNode} from 'react'
import * as Styled from './styled'
import { emptyFunction } from 'helpers'

type Props = {
    type: ThemeColorTypes,
    size: SizeTypes,
    onClick: (event: React.MouseEvent) => void
    children: ReactNode,
    disabled?: boolean,
    isFlat?: boolean,
    isFit?: boolean,
}

const Button = ({
    type = 'primary',
    size = 'medium',
    onClick = emptyFunction,
    children,
    disabled = false,
    isFlat = false,
    isFit = false,
    ...rest
}: Props) => {
    const clickHandler = (event: React.MouseEvent): void => {
        if (!disabled) {
            onClick(event)
        }
    }

    return (
        <Styled.Button
            {...rest}
            size={size}
            isFit={isFit}
            onClick={clickHandler}
            disabled={disabled}
            buttonType={type}
            isFlat={isFlat}
        >
            {children}
        </Styled.Button>
    )
}

export default Button
