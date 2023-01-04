import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./slider.module.less";
import classNames from "classnames/bind";
import SlideButton from "./button";

const cx = classNames.bind(styles);

function useWindowSize() {
  const [size, setSize] = React.useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}

function useInterval(callback: (...args: any[]) => void, delay: number | null) {
  const savedCallback = React.useRef<(...args: any[]) => void>();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Slider = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const items = ["1", "2", "3", "4"];
  function getNewItemWidth() {
    let itemWidth = windowWidth * 0.9 - sliderPadding * 2;
    itemWidth = itemWidth > 1060 ? 1060 : itemWidth;
    return itemWidth;
  }
  const itemSize = items.length;
  const sliderPadding = 40;
  const sliderPaddingStyle = `0 ${sliderPadding}px`;
  const newItemWidth = getNewItemWidth();
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const numbersToAddEdge = 2;
  const [currentIndex, setCurrentIndex] = useState(numbersToAddEdge);
  const [slideTransition, setSlideTransition] = useState(transitionStyle);
  const [isSwiping, setIsSwiping] = useState(false);
  const [slideX, setSlideX] = useState<number | null>(null);
  const [prevSlideX, setPrevSlideX] = useState<number | null>(null);
  let isResizing = useRef(false);

  console.log("prevSlideX :::: ", prevSlideX);

  let slides = setSlides();
  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < numbersToAddEdge) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedLast];
  }

  React.useEffect(() => {
    // isResizing.current = true;
    setIsSwiping(true);
    setSlideTransition("");
    setTimeout(() => {
      // isResizing.current = false;
      // if (!isResizing.current)
      setIsSwiping(false);
    }, 1000);
  }, [windowWidth]);

  useInterval(
    () => {
      handleSlide(currentIndex + 1);
    },
    !isSwiping && !prevSlideX ? 2000 : null
  );

  function replaceSlide(index: number) {
    setTimeout(() => {
      setSlideTransition("");
      setCurrentIndex(index);
    }, transitionTime);
  }

  function handleSlide(index: number) {
    setCurrentIndex(index);
    if (index - numbersToAddEdge < 0) {
      index += itemSize;
      replaceSlide(index);
    } else if (index - numbersToAddEdge >= itemSize) {
      index -= itemSize;
      replaceSlide(index);
    }
    setSlideTransition(transitionStyle);
  }

  function handleSwipe(direction: number) {
    setIsSwiping(true);
    handleSlide(currentIndex + direction);
  }

  function getItemIndex(index: number) {
    index -= numbersToAddEdge;
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
  }

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setPrevSlideX(e.clientX);
  };

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setPrevSlideX(e.touches[0].clientX);
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (typeof prevSlideX === "number" && prevSlideX) {
      setSlideX(e.changedTouches[0].clientX - prevSlideX);
    }
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (typeof prevSlideX === "number" && prevSlideX) {
      setSlideX(e.clientX - prevSlideX);
    }
  };

  const handleMouseUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (slideX) {
      if (typeof prevSlideX === "number" && prevSlideX > e.clientX + 100) {
        handleSlide(currentIndex + 1);
      } else if (
        typeof prevSlideX === "number" &&
        prevSlideX < e.clientX - 100
      ) {
        handleSlide(currentIndex - 1);
      }
      setSlideX(null);
    }
    setPrevSlideX(null);
  };
  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (slideX) {
      if (
        typeof prevSlideX === "number" &&
        prevSlideX > e.changedTouches[0].clientX + 100
      ) {
        handleSlide(currentIndex + 1);
      } else if (
        typeof prevSlideX === "number" &&
        prevSlideX < e.changedTouches[0].clientX - 100
      ) {
        handleSlide(currentIndex - 1);
      }
      setSlideX(null);
    }
    setPrevSlideX(null);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (typeof slideX === "number") {
      if (typeof prevSlideX === "number" && prevSlideX > e.clientX + 100) {
        handleSlide(currentIndex + 1);
      } else if (
        typeof prevSlideX === "number" &&
        prevSlideX < e.clientX - 100
      ) {
        handleSlide(currentIndex - 1);
      }
      setSlideX(null);
    }
    setPrevSlideX(null);
  };

  return (
    <div className={cx({ "slider-area": true })}>
      <div className={cx({ slider: true })}>
        <SlideButton direction="prev" onClick={() => handleSwipe(-1)} />
        <SlideButton direction="next" onClick={() => handleSwipe(1)} />
        <div
          className={cx({ "slider-list": true })}
          // style={{ padding: sliderPaddingStyle }}
        >
          <div
            className={cx({ "slider-track": true })}
            onMouseOver={() => setIsSwiping(true)}
            onMouseOut={() => setIsSwiping(false)}
            style={{
              transform: `translateX(calc(${
                (-100 / slides.length) * (0.5 + currentIndex)
              }% + ${slideX || 0}px))`,
              transition: slideTransition,
            }}
          >
            {slides.map((slide, slideIndex) => {
              const itemIndex = getItemIndex(slideIndex);
              return (
                <div
                  key={slideIndex}
                  className={cx({
                    "slider-item": true,
                    "current-slide": slideIndex === currentIndex,
                  })}
                  style={{ width: newItemWidth || "auto" }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onTouchEnd={handleTouchEnd}
                  onMouseLeave={handleMouseLeave}
                >
                  {itemIndex}/{slideIndex}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
