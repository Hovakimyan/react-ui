import {PropsWithChildren} from "react";

export type Props = PropsWithChildren<{
    onChange: any,
    value: string,
    placeholder?: string,
    size?: SizeTypes,
    disabled?: boolean,
    isFlat?: boolean,
    isFit?: boolean
}>
