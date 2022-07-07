import React, { useState } from "react"
import useAnimation from "./useAnimation"

import { type as typeEffect } from "./assets/strings"

import styles from "./Index.module.scss"

export default function Typing({ string: userString, speed }) {
    const [string, setString] = useState("")

    const getIndex = (str, progress) =>
        Math.ceil(str.length * progress)

    useAnimation("quad", speed, progress => {
        const index = getIndex(userString, progress)
        const outputStr = typeEffect(userString, index)
        setString(outputStr)
    }, string)
    // "debug", Typing.name В отдельный модуль дебаг
    return (
        <div className={styles.carriage}
            dangerouslySetInnerHTML={{ __html: string }}
        />
    )
}