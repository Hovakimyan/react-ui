import { PropsWithChildren } from 'react'

export type Props = PropsWithChildren<{
    size?: FontSizeType
    color?: IGlobalColors
    weight?: number
    align?: string
    ellipsis?: boolean
    noSelect?: boolean
}>
