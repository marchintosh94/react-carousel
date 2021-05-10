import * as React from 'react'
import css from './styles.module.scss'
import cn from 'classnames'
import useSlider from './hook/useSlider'
import { useEffect } from 'react'

export type Theme = 'light' | 'dark' | ''

export type ReactCarouselSliderProps = {
  itemsWidth: number
  itemsHeight: number
  elementsMargin: number
  theme?: Theme
  prevIcon: React.ReactNode
  nextIcon: React.ReactNode
} 

export const ReactCarouselSlider: React.FC<ReactCarouselSliderProps> = ({
  children, 
  itemsWidth, 
  itemsHeight, 
  prevIcon, 
  nextIcon, 
  elementsMargin,
  theme
}) => {
  const {
      handlePrev,
      handleNext,
      slideProps,
      containerRef,
      hasNext,
      hasPrev,
      _touchEnd,
      _touchStart,
      _touchMove,
      resetSlider
  } = useSlider((itemsWidth + elementsMargin * 2), React.Children.count(children));

  useEffect(() => {
    resetSlider()
  }, [children])

  useEffect(() => {  
    document.querySelector(`.${css["slider-content"]}`)?.childNodes.forEach(child => {
      const $child = (child as HTMLElement)
      $child.style.minWidth = `${itemsWidth}px`
      $child.style.minHeight = `${itemsHeight}px`
      $child.style.maxWidth = `${itemsWidth}px`
      $child.style.maxHeight = `${itemsHeight}px`
      $child.style.margin = `${elementsMargin}px`
    })
  })

  return (
    <div className={css["slider-wrapper"]}>
        <div 
            {...slideProps}
            ref={containerRef}
            className={cn(css["slider-content"], "scroll-container")}
            onTouchEnd={_touchEnd}
            onTouchStart={_touchStart}
            onTouchMove={_touchMove}
        >
            {children}  
        </div>
        {<SliderButton onClick={handlePrev} style={{height: itemsHeight}} theme={theme || ''} display={hasPrev} type="prev" icon={prevIcon}/>}
        {<SliderButton onClick={handleNext} style={{height: itemsHeight}} theme={theme || ''} display={hasNext} type="next" icon={nextIcon}/>}
    </div>
  );
}


export type SliderButtonProps = {
  type: 'next' | 'prev'
  display: boolean
  onClick: () => void
  icon: React.ReactNode
  style?: React.CSSProperties
  theme: Theme
} 

export const SliderButton: React.FC<SliderButtonProps> = ({type, onClick, display, style, icon, theme}) => {
  
  return (  
    <div className={cn(css["button-slider"], css[`${type}`], !display? css.none : "", css[`${theme || ''}`])} style={style} onClick={onClick}>
        {icon}
    </div>
  )
}