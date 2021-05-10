# react-carousel

> react carousel slider

[![NPM](https://img.shields.io/npm/v/react-carousel.svg)](https://www.npmjs.com/package/react-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-carousel
```

## Usage

```tsx
import React from 'react'

import { ReactCarouselSlider } from 'react-carousel'
import 'react-carousel/dist/index.css'

const App: React.FC = () => {

  return (
     <ReactCarouselSlider itemsHeight={700} itemsWidth={300} elementsMargin={10} prevIcon={prevIcon} nextIcon={nextIcon}>
      <div></div>
      {/* ..... */}
     </ReactCarouselSlider>
  )
}
```

## License

MIT © [marchintosh94](https://github.com/marchintosh94/)
