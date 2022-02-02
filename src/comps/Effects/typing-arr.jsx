import React, { useState } from "react"
import splitSymbols from "./utils"
import "./index.css"

export default ({ useRender, lines }) => {
    const symbols = splitSymbols(lines)
    const [string, setString] = useState({
        event: "add",
        index: 0,
        chars: []
    })
    const [render, setRender] = useRender(handler, string)

    function handler() {
        switch (string.event) {
            case "add":
                setRender(true)
                setString(props => addChar(props))
                break
            case "remove":
                setRender(true)
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

        if (chars.length !== symbols[index].length) {
            const nextChar = symbols[index][chars.length]
            str.chars.push(nextChar)
            return str
        }

        str.event = "remove"
        str.chars = chars.splice(0, [chars.length - 1])
        return str
    }

    function remChar({ event, index, chars }) {
        const str = { event, index, chars }

        if (chars.length !== 0) {
            str.chars = chars.splice(0, [chars.length - 1])
            return str
        }

        str.event = "add"
        str.index = countNextWord(index)
        str.chars.push(symbols[countNextWord(index)][chars.length])
        return str
    }

    function countNextWord(index) {
        return (index !== lines.length - 1) ? ++index : 0;
    }

    return (
        <div className="carriage">
            {string.chars.join('')}
        </div>
    )
}