import React, { useState, useEffect } from "react"

import Line from "./Line"
import MultiLine from "./MultiLine"

// TODO - Звук печатающей клавиатуры
// TODO - Время ожидания до и после начала печати
// TODO - Управлять скоростью рендеринга из родительского компонента, 
//        чтобы анимация не загружалась раньше чем например ресурсы из интернета
// TODO - Анимация преобразования букв на месте как в киберпанке с одного языка на другой
// TODO - FIX - Исчезновение курсора когда массивы ровняются друг другу

export default ({ mode, line, lines, speed, delay }) => {

    function useRender(handler, target) {
        const [render, setRender] = useState(false)
        // управление через рефы
        useEffect(() => {
            const timeoutID = setTimeout(() => {
                setRender(true)
            }, delay);
            return () => clearTimeout(timeoutID)
        }, [])

        useEffect(() => {
            // const animate = time => {
            //     requestAnimationFrame(time => this.frame(time))
            // }
            // loop() {
            //     requestAnimationFrame(time => this.frame(time))
            // }
            const intervalID = setInterval(() => {
                return (render) ? handler() : clearInterval(intervalID)
            }, speed)
            return () => clearInterval(intervalID)
        }, [target, render, speed])

        return [render, setRender]
    }

    if (mode === "multi") {
        return <MultiLine line={line} useRender={useRender} />
    } else {
        return <Line lines={lines} useRender={useRender} />
    }
}