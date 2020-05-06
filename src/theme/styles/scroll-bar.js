import { createGlobalStyle, } from 'styled-components'

export default createGlobalStyle`
    ::-webkit-scrollbar {
        background-color: ${({ transparent, theme, }) =>
            transparent ? 'transparent' : theme.colors.primaryExtraLight};
        height: 8px;
        width: 4px;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme, }) => theme.colors.secondaryExtraLight};
        border-radius: 4px;
    }

`
