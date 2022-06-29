import { useEffect, useRef } from "react"
import timeCalcFns from "./renderTime"

// Bug fix for >14.x.x. version of the NodeJS
global.performance = global.performance || {
    now: () => new Date().getTime()
}

export default function useAnimation(type, duration, drawFn, deps) {
    const timeCalcFn = timeCalcFns[type]
    const init = useRef(performance.now())
    const frame = useRef()

    const render = time => {
        let timePassed = time - init.current
        let timer = timePassed / duration

        if (timer > 1)
            timer = 1

        let progress = timeCalcFn(timer)

        drawFn(progress)

        if (timer < 1)
            frame.current = requestAnimationFrame(render)
    }

    useEffect(() => {
        frame.current = requestAnimationFrame(render)
        return () => cancelAnimationFrame(frame.current)
    }, [deps])
}