import { useEffect, useRef } from "react"
import timeCalculationFunctions from "./renderTime"

const useAnimation = (type, duration, drawFn, deps) => {
    const frame = useRef()
    const init = useRef(performance.now())
    const last = useRef(performance.now())
    const renderTime = timeCalculationFunctions[type]

    const render = time => {
        const now = performance.now()

        let timePassed = time - init.current
        let timer = timePassed / duration
        if (timer > 1) timer = 1

        let progress = renderTime(timer)
        // console.log(`timePassed: ${Math.round(timePassed / 1000)} Секунд. | timer: ${timer} | progress: ${progress}`)
        drawFn(progress)

        if (timer < 1) {
            last.current = now
            frame.current = requestAnimationFrame(render)
        }
    }

    useEffect(() => {
        frame.current = requestAnimationFrame(render)
        return () => cancelAnimationFrame(frame.current)
    }, deps)
}

export default useAnimation