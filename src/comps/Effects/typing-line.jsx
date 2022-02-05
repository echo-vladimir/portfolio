import React, { useState } from "react"
import useAnimation from "./useAnimation"
import "./index.css"

export default ({ text }) => {
    const [string, setString] = useState("")

    const chars = text
    const to = chars.length;
    const from = 0;

    // TODO - Очереди анимаций
    useAnimation("quad", 8000, progress => {
        const result = (to - from) * progress + from
        setString(chars.substring(0, Math.ceil(result)))
    }, [string])

    return (
        <div className="carriage">
            {string}
        </div>
    )
}