import React, { ReactElement, PropsWithChildren, FC } from 'react'
import * as Styled from './styled'
import { emptyFunction } from 'helpers/methods'

type Props = PropsWithChildren<{
    type: ThemeColorTypes
    size: SizeTypes
    onClick: (event: React.MouseEvent) => void
    disabled?: boolean
    isFlat?: boolean
    isFit?: boolean
}>

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
