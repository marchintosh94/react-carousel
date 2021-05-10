import React from 'react'
import { ReactCarouselSlider } from 'react-carousel'
import 'react-carousel/dist/index.css'
import friends1 from './assets/img/Friends_01.jpg'
import friends2 from './assets/img/Friends_02.jpg'
import friends3 from './assets/img/Friends_03.jpg'
import friends4 from './assets/img/Friends_04.jpg'
import friends5 from './assets/img/Friends_05.jpg'
import friends6 from './assets/img/Friends_06.jpg'
import react from './assets/img/logo512.png'
import github from './assets/img/github-logo.png'
import npm from './assets/img/npm.png'


const App = () => {

  const prevIcon = (
    <i className="far fa-chevron-left"></i>
  )

  const nextIcon = (
    <i className="far fa-chevron-right"></i>
  )


  return (
    <div className="page">
        <h4 className="title">React Carousel</h4>
      <div className="logo-box">
        <img className="logo" src={react}/>
        <img className="logo" src={npm}/>
        <img className="logo" src={github}/>
      </div>
      <ReactCarouselSlider itemsHeight={700} itemsWidth={300} elementsMargin={10} prevIcon={prevIcon} nextIcon={nextIcon} >
        <div className="Friends">
          <img src={friends1} />
        </div>
        <div className="Friends">
          <img src={friends2}/>
        </div>
        <div className="Friends">
          <img src={friends3}/>
        </div>
        <div className="Friends">
          <img src={friends4}/>
        </div>
        <div className="Friends">
          <img src={friends5}/>
        </div>
        <div className="Friends">
          <img src={friends6} style={{height:"100%"}}/>
        </div>
      </ReactCarouselSlider>
    </div>
  )

}

export default App
