import React from 'react'

const Domain = React.lazy(() => import('./Domain'))
const Notifications = React.lazy(() => import('./Notifications'))

export default {
    domain: Domain,
    notifications: Notifications,
}
