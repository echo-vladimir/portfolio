import React, { useEffect, useRef } from "react"

const Scroll = props => {
    const ref = useRef()

    useEffect(() => {
        const el = ref.current
        if (el) {
            const onWheel = e => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 4,
                    behavioer: "smooth"
                })
            }
            el.addEventListener("wheel", onWheel)
            return () => el.removeEventListener("wheel", onWheel)
        }
    }, [])

    return (
        <div
            ref={ref}
            className={props._class}
        >
            {props.children}
        </div>
    )
}

export default Scroll