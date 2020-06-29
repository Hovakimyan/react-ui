const fs = require('fs')
const argv = require('yargs').argv

if (!argv.type || typeof argv.type !== 'string') {
    console.log('Please write type for component')
    process.exit()
}

if (
    argv.type !== 'atoms' &&
    argv.type !== 'molecules' &&
    argv.type !== 'organism'
) {
    console.log(
        'Please use one of required types (atoms | molecules | organism)',
    )
    process.exit()
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const componentType = capitalize(argv.type)

if (!argv.name || typeof argv.name !== 'string') {
    console.log('Please write name for component (example: Button, Text...)')
    process.exit()
}

const name = `${argv.name.charAt(0).toUpperCase()}${argv.name.slice(1)}`

const getItemsList = (name) => {
    return [
        {
            name,
            content: `// @flow

import React from 'react'
import * as Styled from './styled'

type Props = {
    children: React$Node
}

const ${name} = (props: Props) => {
    return <Styled.${name}>{props.children}</Styled.${name}>
}

export default ${name}
`,
        },
        {
            name: 'index',
            content: `import ${name} from './${name}'
export { ${name} }`,
        },
        {
            name: 'stories',
            content: `
            import React from 'react'
import { ${name} } from './index'

export const Sample = () => <${name}>Hello ${name}</${name}>
            
            `,
        },
        {
            name: 'doc.stories.mdx',
            content: `
            import { Preview, Meta, Props, Story, Description } from "@storybook/addon-docs/blocks";
import { ${name} } from './index'
import { Sample } from './stories'

<Meta title="${componentType}|${name}" component={${name}} />

<Description of={${name}}/>

## Simple ${name} Example

<Preview>
    <Story name='sample'>
        <Sample />
    </Story>
</Preview>

## Properties

<Props of={${name}}/>

            `,
        },
        {
            name: 'styled',
            content: `// @flow

import styled from 'styled-components'

export const ${name} = styled.div\`
    display: flex;
\`
`,
        },
    ]
}

function addRequiredFilesToFolder(dir, name) {
    const list = getItemsList(name)

    list.forEach((item) => {
        fs.appendFileSync(`${dir}/${item.name}.js`, item.content)
    })

    console.log(`Folder with data created, please check directory ${dir}`)
}

function createRepoIfNotExist(dir, name) {
    if (!fs.existsSync(dir)) {
        console.log('Creating repository')
        fs.mkdirSync(dir)
        addRequiredFilesToFolder(dir, name)
        process.exit()
    }
    console.log('Repository already exist')
    process.exit()
}

const dir = `src/${argv.type}/${name}`

createRepoIfNotExist(dir, name)
