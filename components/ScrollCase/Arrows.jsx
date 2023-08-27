import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import styles from "./Arrows.module.scss";
import animationStyles from "../../styles/animation.module.scss";
import Link from "next/link";

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

export function LeftArrow({ prevCase, isAnimationComplete }) {
  const { isFirstItemVisible, scrollToItem, getPrevElement } =
    useContext(VisibilityContext);

  const clickHandler = (ev) => {
    ev.preventDefault();

    if (!isFirstItemVisible) {
      scrollToItem(getPrevElement(), "smooth", "start");
    }
  };

  const id = isFirstItemVisible && prevCase.id;
  return (
    <Arrow
      disabled={false}
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        fontSize: "1em",
        left: "2%",
        width: isFirstItemVisible ? "36px" : "36px",
        padding: "22px",
        backdropFilter: "blur(44px)",
      }}
      isAnimationComplete={isAnimationComplete}
      onClick={clickHandler}
    >
      {isFirstItemVisible ? (
        <Link href={`/cases/${id}`}>Prev Case</Link>
      ) : (
        "Prev ←"
      )}
    </Arrow>
  );
}

export function RightArrow({ nextCase, isAnimationComplete }) {
  const { getNextElement, isLastItemVisible, scrollToItem } =
    useContext(VisibilityContext);

  const clickHandler = (ev) => {
    ev.preventDefault();

    if (!isLastItemVisible) {
      scrollToItem(getNextElement(), "smooth", "end");
    }
  };

  const id = isLastItemVisible && nextCase.id;
  return (
    <Arrow
      disabled={false}
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        fontSize: "1em",
        right: "2%",
        width: isLastItemVisible ? "36px" : "36px",
        padding: "22px",
      }}
      isAnimationComplete={isAnimationComplete}
      onClick={clickHandler}
    >
      {isLastItemVisible ? (
        <Link href={`/cases/${id}`}>Next Case</Link>
      ) : (
        "Next →"
      )}
    </Arrow>
  );
}
