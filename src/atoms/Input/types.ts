import { PropsWithChildren, ChangeEvent } from 'react'

export type Props = PropsWithChildren<{
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
    placeholder?: string
    size?: SizeTypes
    disabled?: boolean
    isFlat?: boolean
    isFit?: boolean
}>
