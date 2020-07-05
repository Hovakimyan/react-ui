import { PropsWithChildren } from 'react'

export type Props = PropsWithChildren<{
    tag: HeadingTypes
    size?: FontSizeType
    color?: GlobalColorType
    weight?: number
    align?: string
    ellipsis?: boolean
    noSelect?: boolean
}>
