# react-ui

## UI Library of react components

## Installation

`npm i`
`npm start`

## Structure

Project created with Atomic structure
-- Atoms
-- Molecules
-- Organism
-- helpers // helper methods

For Typing we use FLOW

## How to create components

For creating component we can use command below

`npm run create  -- --type=atoms --name=Button`

as `type` we need to use `atom | molecule | organism`

This command will crate all needed files in selected type directory

All components will be created as Functional components

After creating component, please add `Demo` example in `stories` to show usage

## Deployment

for deployment we use `storybook-deployer` which will publish project to github pages

To deploy project you need to run

`npm run deploy`
