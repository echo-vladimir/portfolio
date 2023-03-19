import React from "react"
import { VisibilityContext } from "react-horizontal-scrolling-menu"

function Arrow({
    children,
    disabled,
    onClick,
    style
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                ...style,
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
                alignContent: "center",
                flexWrap: "wrap",
                width: "36px",
                height: "36px",
                opacity: disabled ? "0" : ".6",
                userSelect: "none",
                zIndex: "9999",
            }}>
            {children}
        </button>
    )
}

export function LeftArrow() {
    const {
        isFirstItemVisible,
        scrollToItem,
        getPrevElement,
        visibleItemsWithoutSeparators,
        initComplete
    } = React.useContext(VisibilityContext)

    const [disabled, setDisabled] = React.useState(!initComplete || (initComplete && isFirstItemVisible))

    React.useEffect(() => {
        // NOTE: detect if whole component visible
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isFirstItemVisible)
        }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators])

    // NOTE: for scroll 1 item
    const clickHandler = () => scrollToItem(getPrevElement(), "smooth", "start");

    return (
        <Arrow
            disabled={disabled}
            style={{
                position: "absolute",
                left: "1%",
            }}
            onClick={clickHandler}>
            &larr;
        </Arrow>
    )
}

export function RightArrow() {
    const {
        isLastItemVisible,
        scrollToItem,
        getNextElement,
        visibleItemsWithoutSeparators
    } = React.useContext(VisibilityContext)

    const [disabled, setDisabled] = React.useState(!visibleItemsWithoutSeparators.length && isLastItemVisible)

    React.useEffect(() => {
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isLastItemVisible)
        }
    }, [isLastItemVisible, visibleItemsWithoutSeparators])

    // NOTE: for scroll 1 item
    const clickHandler = () => scrollToItem(getNextElement(), "smooth", "end")

    return (
        <Arrow
            disabled={disabled}
            style={{
                position: "absolute",
                right: "1%",
            }}
            onClick={clickHandler}>
            &rarr;
        </Arrow>
    )
}
