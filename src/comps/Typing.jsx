import React, { useState } from "react"
import useAnimation from "./useAnimation"
import "./Typing.css"

export default ({ text }) => {
    const [string, setString] = useState("")

    const chars = text
    const next = chars.length;
    const from = 0;

    useAnimation("quad", 8000, progress => {
        const to = Math.ceil((next - from) * progress + from)
        setString(chars
            .substring(0, to)
            .split("\n")
            .join("<br/>"))
    }, [string])

    return (
        <div className="carriage"
            dangerouslySetInnerHTML={{ __html: string }}
        />
    )
}