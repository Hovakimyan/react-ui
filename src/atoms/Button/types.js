// @flow
export type Props = {
    type: ThemeColorTypes,
    size: SizeTypes,
    onClick: Function,
    children: React$Node,
    refHandler?: Function,
    className?: string,
    disabled?: boolean,
    isFlat?: boolean,
    fit?: boolean
}
