import { useState, useEffect, useContext, useRef } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Styler from "stylefire";
import { animate } from "popmotion";
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
import useSwipe from "../hooks/useSwipe";
import useDrag from "../hooks/useDrag";
import { LeftArrow, RightArrow } from "./HorizontalArrows";
import styles from "../styles/animation.module.scss";
import SlideAnimationContext from "../contexts/SlideAnimationContext";

export default function HorizontalScroll({ children, allCasesData }) {
  const { disableScroll } = usePreventBodyScroll();
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe();
  const { dragStop, dragMove } = useDrag();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleScroll = ({ visibleElements }) => {
    setVisibleElements(visibleElements);
  };

  const [currentCase, setCurrentCase] = useState(0);
  const [visibleElements, setVisibleElements] = useState([]);

  useEffect(() => {
    const currentElementId = visibleElements[0];
    if (currentElementId) {
      if (allCasesData.map((item) => item.id).includes(currentElementId)) {
        const currentElementIndex = allCasesData.findIndex(
          (item) => item.id === currentElementId
        );

        setCurrentCase(currentElementIndex + 1);
      } else {
        setCurrentCase(0);
      }
    }
  }, [visibleElements]);

  const scrollBehavior = async (instructions) => {
    if (!instructions || instructions.length === 0) return;

    for (let { el, left } of instructions) {
      if (!el) continue;

      await animate({
        from: el.scrollLeft,
        to: left,
        type: "spring",
        onUpdate: (left) => el.scrollTo({ left }),
      }).finished;
    }
  };

  const { isLoading, isAnimationComplete, currentContentRef } = useContext(
    SlideAnimationContext
  );

  const apiRef = useRef({});

  return (
    <>
      <div
        ref={currentContentRef}
        className={isLoading ? styles.hidden : ""}
        onMouseEnter={disableScroll}
        onMouseLeave={dragStop}
      >
        <ScrollMenu
          apiRef={apiRef}
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
              >{`${currentCase ? currentCase : "- "}/${
                allCasesData.length
              }`}</h3>
            </div>
          }
          onWheel={onWheel}
          alignCenter={true}
          clickWhenDrag={false}
          dragging={true}
          LeftArrow={<LeftArrow isAnimationComplete={isAnimationComplete} />}
          RightArrow={<RightArrow isAnimationComplete={isAnimationComplete} />}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onTouchStart={onTouchStart}
          onMouseMove={handleDrag}
          transitionDuration={{ duration: 300 }}
          transitionEase={(t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)}
          transitionBehavior={scrollBehavior}
          onUpdate={(apiObj) => handleScroll(apiObj)}
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
    scrollNext(undefined, undefined, undefined, { duration: 300 });
  } else if (ev.deltaY > 0) {
    scrollPrev(undefined, undefined, undefined, { duration: 300 });
  }
}
