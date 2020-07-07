import { PropsWithChildren, MouseEvent } from 'react'

export type Props = PropsWithChildren<{
    type: ThemeColorTypes
    size: SizeTypes
    onClick: (event: MouseEvent) => void
    disabled?: boolean
    isFlat?: boolean
    isFit?: boolean
}>
