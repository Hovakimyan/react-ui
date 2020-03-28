import { createGlobalStyle } from 'styled-components'

export const UpAndDown = createGlobalStyle`
    @keyframes up {
        from {top: 100%; transform: translate(-50%, 100%) }
        to {top: 50%; transform: translate(-50%, -50%)}
    }
    
    @keyframes down {
        from {top: 50%; transform: translate(-50%, -50%)}
        to {top: 100%; transform: translate(-50%, 100%) }
    }
`

export const FadeInOut = createGlobalStyle`
    @keyframes fadeIn {
        from { opacity: 0 }
        to { opacity: 1 }
    }
    
    @keyframes fadeOut {
        from { opacity: 1 }
        to { opacity: 0 }
    }
`

export const CentralTransforming = createGlobalStyle`
    @keyframes open {
        from {opacity: 0;transform: translate(-50%, -50%) scale(.5)}
        to {opacity: 1;transform: translate(-50%, -50%) scale(1)}
    }
    
    @keyframes close {
        from {opacity: 1;transform: translate(-50%, -50%) scale(1)}
        to {opacity: 0;transform: translate(-50%, -50%) scale(.5)}
    }
`
