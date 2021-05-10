import { useState, useRef, useEffect } from "react";

const useSlider = (itemWidth: number, countItems: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);
  const [scroll, setScroll] = useState<{
    isDown: boolean;
    startX: number;
    scrollLeft: number;
  }>({ isDown: false, scrollLeft: 0, startX: 0 });

  useEffect(() => {
    const containerWidth = containerRef?.current?.clientWidth;
    if (containerWidth) {
      const totalInViewport: number = Math.floor(containerWidth / itemWidth)
      setTotalInViewport(totalInViewport);
    }
  }, [containerRef.current]);


  const _touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const startX = e.changedTouches[i].pageX - e.currentTarget.offsetLeft;
      const scrollLeft = e.currentTarget.scrollLeft;
      setScroll(() => ({ isDown: true, scrollLeft, startX }));
    }
  };

  const _touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setScroll((state) => ({ ...state, isDown: false }));
    e.currentTarget.classList.remove("active");
  };

  const _touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scroll.isDown) return;
    for (let i = 0; i < e.changedTouches.length; i++) {
      const x = e.changedTouches[i].pageX - e.currentTarget.offsetLeft;
      const walk = (x - scroll.startX) * 1.6;
      e.currentTarget.scrollLeft = scroll.scrollLeft - walk;
    }
  };

  const handlePrev = () => {
    setViewed(viewed - 1);
    setDistance(distance + itemWidth);
  };

  const handleNext = () => {
    setViewed(viewed + 1);
    setDistance(distance - itemWidth);
  };

  const resetSlider = () => {
    setViewed(0)
    setDistance(0)
  }

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countItems;

  return {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasPrev,
    hasNext,
    scroll,
    setScroll,
    _touchEnd,
    _touchStart,
    _touchMove,
    resetSlider
  };
};

export default useSlider;
