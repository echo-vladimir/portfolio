import React, { useState, useEffect } from "react"
import "./Line.css"

export default ({ line, speed }) => {
    const [play, setPlay] = useState(true)
    const [string, setString] = useState({
        event: "add",
        index: 0,
        chars: "",
    })

    useEffect(() => {
        const intervalID = setInterval(() => {
            return (play) ? type() : clearInterval(intervalID)
        }, speed)
        return () => clearInterval(intervalID)
    }, [string])

    function type() {
        switch (string.event) {
            case "add":
                add()
                break
            case "stop":
                setPlay(false)
                break
            default:
                // setPlay(false)
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