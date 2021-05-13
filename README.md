# react-carousel

![npm](https://img.shields.io/npm/v/@marchintosh94/react-carousel) ![GitHub top language](https://img.shields.io/github/languages/top/marchintosh94/react-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  ![npm bundle size](https://img.shields.io/bundlephobia/min/@marchintosh94/react-carousel) ![npm](https://img.shields.io/npm/dm/@marchintosh94/react-carousel)

Horizontal infinite scroll container

## Table of Contents
----------
- [Features](#-features)
- [Install](#-install)
- [Example](#-example)
- [API](#-api)
- [License](#license)

## Features
----------

- Display element in an horizontal carousel
- Use custom buttons to slide the elements
- Mobile support for scroll
- Use predefined themes for side buttons
- Responsive horizontal git add slider


## Install
----------

Using npm : 
```bash
npm install  @marchintosh94/react-carousel
```
Using yarn :
```bash
yarn add @marchintosh94/react-carousel
```

```ts
  import { ReactCarouselSlider } from "@marchintosh94/react-carousel"
  import "@marchintosh94/react-carousel/dist/index.css"
```


## Example
----------

See a complete **[Demo](https://crkn6.csb.app/)**.

#### Display 5 boxes in **react carosel**

In this example we are going to use [fontawesome](https://fontawesome.com/)) icons for the "previous" and "next" buttons, but you can use your favourite icon sets:

```tsx
  const prevIcon = (
    <i className="far fa-chevron-left"></i>
  )

  const nextIcon = (
    <i className="far fa-chevron-right"></i>
  )
```

Then define the boxes that will be displayed in **react carousel**
```tsx
  const boxesStyle: React.CSSProperties = {
    height: "250px", 
    width: "400px", 
    border: ".5px solid rgba(0, 0, 0, .4)", 
    borderRadius: "5px"
  }

  const boxes: React.ReactNode = (
    <div style={boxesStyle}></div>
    <div style={boxesStyle}></div>
    <div style={boxesStyle}></div>
    <div style={boxesStyle}></div>
    <div style={boxesStyle}></div>
  )
```
Display **react carousel**

```tsx
  return (

    <ReactCarouselSlider 
      itemsHeight={boxesStyle.height} 
      itemsWidth={boxesStyle.width} 
      elementsMargin={10} //in px
      prevIcon={prevIcon}
      nextIcon={nextIcon}>

      {boxes}

    </ReactCarouselSlider>
  )
```

Complete example

```tsx
import React from 'react'

import { ReactCarouselSlider } from 'react-carousel'
import 'react-carousel/dist/index.css'

const MyComponent: React.FC = () => {

  const boxesStyle: React.CSSProperties = {
    height: "250px", 
    width: "400px", 
    border: ".5px solid rgba(0, 0, 0, .4)", 
    borderRadius: "5px"
  }

  const boxes: React.ReactNode = (
    <div style={boxesStyle}></div>
    <div style={boxesStyle}></div>
    <div style={boxesStyle}></div>
    <div style={boxesStyle}></div>
    <div style={boxesStyle}></div>
  )

  const prevIcon = (
    <i className="far fa-chevron-left"></i>
  )

  const nextIcon = (
    <i className="far fa-chevron-right"></i>
  )

  return (
    <ReactCarouselSlider 
      itemsHeight={boxesStyle.height} 
      itemsWidth={boxesStyle.width} 
      elementsMargin={10} 
      prevIcon={prevIcon}
      nextIcon={nextIcon}>

      {boxes}

     </ReactCarouselSlider>
  )
}
```

## API
----------
### Properties **ReactCarouselSlider**

| Name                | Type                            | Description       |
| ---------------     | -----------                     | -----------       |
| itemsHeight         | number                          | this property sets the height of container (in px) |
| itemsWidth          | number                          | this property is used to calculate the container's width (in px) |
| elementsMargin      | number                          | this property represent the  margin (in px) between each element in the carousel |
| prevIcon            | React.ReactNode                 | the element used to slide the carousel to the left |
| nextIcon            | React.ReactNode                 | the element used to slide the carousel to the right |
| theme               | 'light' \| 'dark' \| ''         | default themes for the slider buttons |


## License
----------
MIT © [marchintosh](https://github.com/marchintosh94/react-carousel)
