// @flow

export type TagTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Props = {
    children: React$Node,
    tag: TagTypes,
    className?: string,
    size?: FontSizeType,
    color?: GlobalColorType,
    weight?: number,
    align?: string,
    ellipsis?: boolean,
    noSelect?: boolean
}
