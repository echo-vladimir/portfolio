import { useEffect, useRef } from "react"
import animations from "./animations"

const useAnimation = (type, duration, draw, deps) => {
    const frame = useRef()
    const init = useRef(performance.now())
    const last = useRef(performance.now())
    const anim = animations[type]

    const render = time => {
        const now = performance.now()

        let timePassed = time - init.current
        let timer = timePassed / duration
        if (timer > 1) timer = 1

        let progress = anim(timer)
        // console.log(`timePassed: ${Math.round(timePassed / 1000)} Секунд. | timer: ${timer} | progress: ${progress}`)
        draw(progress)

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