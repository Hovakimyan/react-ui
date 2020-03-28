import { css } from 'styled-components'

export const noSelect = css`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`

export const ellipsis = css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
