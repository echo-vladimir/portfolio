import React from "react"
import Line from "./typing-line"

export default ({ mode, text, speed, delay = 0, endDelay = 0 }) => {
    return <Line text={text} />
}