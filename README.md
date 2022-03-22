# Frontend Mentor - Bookmark landing page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Live Site URL: [https://bookmark-landing-page-master1.netlify.app/](https://bookmark-landing-page-master1.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Jest 
- Enzyme
- Scss 
- Webpack 


### What I learned

1- In this project I used a new directory structure where all files related to a component are grouped togather which is dependent on existence of webpack loaders to process each of these assets. One of advantages fo using this pattern is that the component becomes more and easer to resue since you can do simple component an past if you want to use these component in other projects.
```
FooComponent:
  index.js 
  FooComponent.scss 
  FooComponent.test.js
  foo.js
  foo-icon.svg
  FooComponent-data.json
```

2- As the size of a project grows you end up doing import of type ``` import foo from "../../../components/componentName/component"``` which is a mothful to type, a elegant solution to this problem is to use aliases, in webpack config you can add: 
```js
module.exports ={
 resolve:{
  alias:{
    Components: path.resolve(__dirname,"src/components")
  }
 }
}
```
And instead of that long string you type ```js import foo from "Components/foo/foo.js"```. In in a small project this might not be a headache but as the project grows alises can save you alot of redundant typing. 

3- Using react's property validation feature you can validate props of each component to make sure it has the right type, one major benefits of doing property validation is that debugging becomes much easier since react flags the presence of wrong prop type.You need to install the "prop-types" npm package and the syntax is:
```js 
Component.prototype = {
  propName: PropTypes.tpye
  propName1: PropTypes.type.isRequired
}

```
