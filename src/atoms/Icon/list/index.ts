import React from 'react'

const Domain = React.lazy(() => import('./Domain'))
const Email = React.lazy(() => import('./Email'))

export default {
    domain: Domain,
    email: Email,
}
