import React from 'react'
import * as Styled from './styled'
import list from './list'

type Props = {
    name: TIconNames
}

const Icon = ({ name }: Props) => {
    const SelectedComponent = list[name]
    return (
        <Styled.Icon>
            <React.Suspense fallback={<div>loading..</div>}>
                <SelectedComponent />
            </React.Suspense>
        </Styled.Icon>
    )
}

export default Icon
