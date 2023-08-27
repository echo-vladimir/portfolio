import { useState, useContext } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Styler from "stylefire";
import { animate } from "popmotion";
import usePreventBodyScroll from "../../hooks/usePreventBodyScroll";
import useSwipe from "../../hooks/useSwipe";
import useDrag from "../../hooks/useDrag";
import { LeftArrow, RightArrow } from "./Arrows";
import styles from "../../styles/animation.module.scss";
import SlideAnimationContext from "../../contexts/SlideAnimationContext";

export default function HorizontalScroll({
  children,
  prevCase,
  nextCase,
  totalCases,
  currentNum,
}) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe();
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [selected, setSelected] = useState("");
  const handleItemClick = (itemId) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };

  const scrollBehavior = (instructions) => {
    const [{ el, left }] = instructions;
    const styler = Styler(el);

    animate({
      from: el.scrollLeft,
      to: left,
      type: "spring",
      onUpdate: (left) => styler.set("scrollLeft", left),
    });
  };

  const { isLoading, isAnimationComplete, currentContentRef } = useContext(
    SlideAnimationContext
  );

  return (
    <>
      <div
        ref={currentContentRef}
        className={isLoading ? styles.hidden : ""}
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
      >
        <ScrollMenu
          Header={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.9rem",
                marginTop: "46px",
              }}
            />
          }
          Footer={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.9rem",
                marginTop: "46px",
              }}
            >
              <h3
                className={`${
                  isAnimationComplete ? styles.fadeIn : styles.fadeOut
                }`}
              >{`${currentNum}/${totalCases}`}</h3>
            </div>
          }
          onWheel={onWheel}
          alignCenter={true}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onTouchStart={onTouchStart}
          LeftArrow={
            <LeftArrow
              prevCase={prevCase}
              isAnimationComplete={isAnimationComplete}
            />
          }
          RightArrow={
            <RightArrow
              nextCase={nextCase}
              isAnimationComplete={isAnimationComplete}
            />
          }
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
          options={{ throttle: 0 }}
          // transitionEase={(t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)}
          // transitionBehavior={scrollBehavior}
        >
          {children}
        </ScrollMenu>
      </div>
    </>
  );
}

function onWheel({ scrollNext, scrollPrev }, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    scrollNext(undefined, undefined, undefined, { duration: 2000 });
  } else if (ev.deltaY > 0) {
    scrollPrev(undefined, undefined, undefined, { duration: 2000 });
  }
}
