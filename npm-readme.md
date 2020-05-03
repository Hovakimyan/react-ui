# react-styles-ui

React components for faster and easier web development. 

Project deployed with storybook and you can see demo
[here](https://hovakimyan.github.io/react-ui/)

## Installation

You can Install the package in your project with:

```
// with npm
npm install react-styles-ui
 
// with yarn
yarn add react-styles-ui
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Text from 'react-styles-ui/atoms';
 
function App() {
  return (
    <Text color="primary" size="medium">
      Hello World
    </Text>
  );
}
 
ReactDOM.render(<App />, document.querySelector('#root'));
```
