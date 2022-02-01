import React, { useState } from "react"
import "./index.css"

export default ({ useRender, lines }) => {
    const [string, setString] = useState({
        event: "add",
        index: 0,
        chars: ""
    })
    const [render, setRender] = useRender(handler, string)

    function handler() {
        switch (string.event) {
            case "add":
                setString(props => addChar(props))
                break
            case "remove":
                setString(props => remChar(props))
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

        if (chars.length !== lines[index].length) {
            str.chars = getNextChar(index, chars)
            return str
        }

        if (lines.length > 1) {
            str.event = "remove"
            str.chars = getSubstrChars(chars)
            return str
        }

        str.event = "stop"
        return str
    }

    function remChar({ event, index, chars }) {
        const str = { event, index, chars }

        if (chars.length !== 0) {
            str.chars = getSubstrChars(chars)
            return str
        }

        str.event = "add"
        str.index = countNextWord(index)
        str.chars = getFirstCharFromNextWord(index, chars)
        return str
    }

    function getNextChar(index, chars) {
        const nextChar = lines[index][chars.length]
        return chars + nextChar
    }

    function getSubstrChars(chars) {
        return chars.substring(0, [chars.length - 1])
    }

    function getFirstCharFromNextWord(index, chars) {
        return chars + lines[countNextWord(index)][chars.length]
    }

    function countNextWord(index) {
        return (index !== lines.length - 1) ? index + 1 : 0;
    }

    return (
        <div className={string.chars.length !== lines[string.index].length ? "carriage" : null}>
            {string.chars}
        </div>
    )
}