import { PropsWithChildren } from 'react'

export type Props = PropsWithChildren<{
    size?: FontSizeType
    color?: GlobalColorType
    weight?: number
    align?: string
    ellipsis?: boolean
    noSelect?: boolean
}>
