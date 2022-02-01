import React, { useState } from "react"
import "./index.css"

export default ({ useRender, line }) => {
    const [string, setString] = useState({
        event: "add",
        index: 0,
        chars: "",
    })
    const [render, setRender] = useRender(handler, string)

    function handler() {
        switch (string.event) {
            case "add":
                setString(props => addChar(props))
                break
            case "stop":
                setRender(false)
                break
            default:
                setRender(false)
                console.log(render)
                break;
        }
    }

    function addChar({ event, index, chars }) {
        const str = { event, index, chars }
        const nextChar = line[0][chars.length]

        if (nextChar) {
            str.chars = (nextChar === "\n")
                ? chars + "</br>"
                : chars + nextChar
            return str
        }

        str.event = "stop"
        return str
    }

    return (
        <div
            dangerouslySetInnerHTML={{ __html: string.chars }}
            className="carriage"
        />
    )
}