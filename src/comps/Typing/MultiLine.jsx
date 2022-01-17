import React, { useState } from "react"
import "./Line.css"

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
                add()
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

    function add() {
        setString(({ event, index, chars }) => {
            const nextChar = line[0][chars.length]
            return (nextChar) ? {
                event,
                index,
                chars: (nextChar === "\n") ? chars + "</br>" : chars + nextChar
            } : {
                event: "stop",
                index,
                chars
            }
        })
    }

    return (
        <div
            dangerouslySetInnerHTML={{ __html: string.chars }}
            className="carriage"
        />
    )
}