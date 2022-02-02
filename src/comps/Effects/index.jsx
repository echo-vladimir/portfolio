import React from "react"

import MultiLine from "./typing-multiLine"
import Line from "./typing-line"

export default ({ mode, line, lines, speed, delay = 0 }) => {
    if (mode === "multi") {
        return <MultiLine line={line} />
    } else {
        return <Line lines={lines} />
    }
}