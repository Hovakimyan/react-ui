import { PropsWithChildren } from 'react'

export type Props = PropsWithChildren<{
    tag: HeadingTypes
    size?: FontSizeType
    color?: IGlobalColors
    weight?: number
    align?: string
    ellipsis?: boolean
    noSelect?: boolean
}>
