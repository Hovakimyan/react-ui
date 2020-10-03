# react-styles-ui


## UI Library of react components

Project deployed with storybook and you can see
[DEMO HERE](https://hovakimyan.github.io/react-ui/)

## Installation

`yarn`
`yarn start`

## Structure

Project created with Atomic structure

-   Atoms
-   Molecules
-   Organism
-   helpers // helper methods

For Typing we use `TS`

## How to create components

For creating component we can use command below

`yarn run create -- --type=atoms --name=Button`

as `type` we need to use `atom | molecule | organism`

This command will crate all needed files in selected type directory

All components will be created as Functional components

After creating component, please add `Demo` example in `stories` to show usage

## Deployment

for deployment we use `storybook-deployer` which will publish project to github pages

To deploy project you need to run

`yarn run deploy`
