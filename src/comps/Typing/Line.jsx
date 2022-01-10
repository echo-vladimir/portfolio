import React, { useState, useEffect } from "react"
import "./Line.css"

export default ({ lines, speed, delay = 0 }) => {
    const [render, setRender] = useState(false)
    const [string, setString] = useState({
        event: "add",
        index: 0,
        chars: "",
    })

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setRender(true)
        }, delay);
        return () => clearTimeout(timeoutID)
    }, [])

    useEffect(() => {
        const intervalID = setInterval(() => {
            return (render) ? type() : clearInterval(intervalID)
        }, speed)
        return () => clearInterval(intervalID)
    }, [string, render, speed])

    function type() {
        switch (string.event) {
            case "add":
                add()
                break
            case "remove":
                remove()
                break
            case "stop":
                setRender(false)
                break
            default:
                // setPlay(false)
                break;
        }
    }

    function add() {
        setString(({ event, index, chars }) => {
            const nextChar = lines[index][chars.length]
            return (chars.length !== lines[index].length) ? {
                event,
                index,
                chars: chars + nextChar
            } : (lines.length > 1) ? {
                event: "remove",
                index,
                chars: chars.substring(0, [chars.length - 1]),
            } : {
                event: "stop",
                index,
                chars
            }
        })
    }

    function remove() {
        setString(({ event, index, chars }) => {
            return (chars.length !== 0) ? {
                event,
                index,
                chars: chars.substring(0, [chars.length - 1])
            } : {
                event: "add",
                index: nextWord(index),
                chars: chars + lines[nextWord(index)][chars.length]
            }
        })
    }

    function nextWord(index) {
        return (index !== lines.length - 1) ? index + 1 : 0;
    }

    return (
        // <span className={render ? "carriage" : "установить другой класс и отменить анимацию"}>
        // <span className={"carriage"}>
        <span className={string.chars.length !== lines[string.index].length ? "carriage" : null}>
            {string.chars}
        </span>
    )
}