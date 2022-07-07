import React, { useState } from "react"
import useAnimation from "./useAnimation"

import { modify as modifyEffect } from "./useAnimation/Assets/strings"

import styles from "./Index.module.scss"

export default function ModifyEffect({ string: userString, speed }) {
    const [string, setString] = useState("")

    const getRandNum = () => Math.floor(Math.random() * (9 - 0 + 1)) + 0
    const getIndex = (string, progress) =>
        Math.ceil(string.length * progress)

    useAnimation("quad", speed, progress => {
        const index = getIndex(userString, progress)
        const outputStr = modifyEffect(userString, index, getRandNum())
        setString(outputStr)
    }, string)

    return (
        <div className={styles.carriage}
            dangerouslySetInnerHTML={{ __html: string }}
        />
    )
}