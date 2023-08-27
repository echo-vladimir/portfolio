import { useState, useEffect, useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import animationStyles from "../styles/animation.module.scss";
import styles from "./HorizontalArrows.module.scss";

function Arrow({ children, disabled, onClick, style, isAnimationComplete }) {
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      className={
        isAnimationComplete
          ? `${animationStyles.fadeIn} ${styles.arrow}`
          : animationStyles.fadeOut
      }
      style={style}
    >
      {children}
    </div>
  );
}

export function LeftArrow({ isAnimationComplete }) {
  const {
    isFirstItemVisible,
    scrollPrev,
    initComplete,
    visibleElements,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        fontSize: "1em",
        left: "2%",
        padding: "22px",
        backdropFilter: "blur(44px)",
      }}
      isAnimationComplete={isAnimationComplete}
      disabled={disabled}
      onClick={() => scrollPrev()}
    >
      Prev ←
    </Arrow>
  );
}

export function RightArrow({ isAnimationComplete }) {
  const { isLastItemVisible, scrollNext, visibleElements } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleElements.length && isLastItemVisible
  );

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        fontSize: "1em",
        right: "2%",
        padding: "22px",
      }}
      isAnimationComplete={isAnimationComplete}
      disabled={disabled}
      onClick={() => scrollNext()}
    >
      Next →
    </Arrow>
  );
}
