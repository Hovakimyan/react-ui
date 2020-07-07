import React, { ReactElement, FC } from 'react'
import * as Styled from './styled'
import { emptyFunction } from 'helpers/methods'
import { Props } from './types'

const Button: FC<Props> = ({
    type = 'primary',
    size = 'medium',
    onClick = emptyFunction,
    children,
    disabled = false,
    isFlat = false,
    isFit = false,
    ...rest
}: Props): ReactElement => {
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
