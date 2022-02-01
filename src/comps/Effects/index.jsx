import React, { useState, useEffect, useRef } from "react"

import Line from "./typing-line"
import MultiLine from "./typing-multiLine"

export default ({ mode, line, lines, speed, delay = 1500 }) => {

    function useRender(handler, state) {
        const [render, setRender] = useState(true)
        useEffect(() => {
            const timeoutID = setTimeout(() => {
                setRender(true)
            }, delay);
            return () => clearTimeout(timeoutID)
        })

        useEffect(() => {
            const intervalID = setInterval(() => {
                setRender(true)
                return (render) ? handler() : clearInterval(intervalID)
            }, speed)
            return () => clearInterval(intervalID)
        }, [state])

        return [render, setRender]
    }

    if (mode === "multi") {
        return <MultiLine line={line} useRender={useRender} />
    } else {
        return <Line lines={lines} useRender={useRender} />
    }
}