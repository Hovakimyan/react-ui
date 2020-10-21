import React from 'react'
import * as Styled from './styled'
import list from './list'

type Props = {
    name: TIconNames
    title: string
}

const Icon = ({ name, title }: Props) => {
    const SelectedComponent = list[name]
    return (
        <Styled.Icon title={title}>
            <React.Suspense fallback={<div>loading..</div>}>
                <SelectedComponent />
            </React.Suspense>
        </Styled.Icon>
    )
}

export default Icon
