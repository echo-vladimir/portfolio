import { useState } from "react";

const useSwipe = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = () => (ev) => {
    setTouchEnd(null);
    setTouchStart(ev.targetTouches[0].clientX);
  };

  const onTouchMove = () => (ev) => {
    setTouchEnd(ev.targetTouches[0].clientX);
  };

  const onTouchEnd = (apiObj) => () => {
    if (!touchStart || !touchEnd) return false;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    const isLeftSwipe = distance < minSwipeDistance;
    console.log({ isSwipe, isLeftSwipe });
    if (isSwipe) {
      if (isLeftSwipe) {
        apiObj.scrollPrev();
      } else {
        apiObj.scrollNext();
      }
    }
  };

  return { onTouchStart, onTouchEnd, onTouchMove };
};

export default useSwipe;
