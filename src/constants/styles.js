import { css, keyframes } from 'styled-components'
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

export const visuallyHidden = css`
    position: absolute;
    clip-path: inset(100%);
    clip: rect(0, 0, 0, 0);
    margin: -1px;
    width: 0;
    height: 0;
    overflow: hidden;
`

export const openDropDown = keyframes`
    from {
        height: 0;
    }

    to {
        height: ${({ height }) => height}px;
    }
`

export const closeDropDown = keyframes`
    from {
        height: ${({ height }) => height}px;
    }

    to {
        height: 0;
    }
`

export const _applyFilter = filter => {
    const {
        sepia = 0,
        contrast = 1,
        grayscale = 0,
        saturate = 1,
        huerotate = 0,
        brightness = 1
    } = filter
    return `
      sepia(${sepia})
      contrast(${contrast})
      grayscale(${grayscale}) 
      saturate(${saturate}) 
      hue-rotate(${huerotate}deg) 
      brightness(${brightness})
    `
}

const shadows = {
    shallow: '0px 6px 12px 0px rgba(0,82,224,0.1);',
    dense: '0px 3px 9px 0px rgba(0,82,224,0.2);'
}

export const getBoxShadow = (shadowType = 'dense') => {
    return shadows[shadowType]
}
