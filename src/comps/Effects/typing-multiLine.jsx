import React, { useState } from "react"
import useRender from "./useRender"
import "./index.css"

export default ({ line }) => {
    const [string, setString] = useState({
        event: "add",
        index: 0,
        chars: "",
    })

    useRender(e => {
        switch (string.event) {
            case "add":
                setString(props => addChar(props))
                break
            default:
                break;
        }
    }, [string])

    function addChar({ event, index, chars }) {
        const str = { event, index, chars }
        const nextChar = line[0][chars.length]

        if (nextChar) {
            str.chars = (nextChar === "\n")
                ? chars + "</br>"
                : chars + nextChar
            return str
        }

        return str
    }

    return (
        <div
            dangerouslySetInnerHTML={{ __html: string.chars }}
            className="carriage"
        />
    )
}