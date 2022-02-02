import { useEffect, useRef } from "react"

const useRender = (cb, deps) => {
    const frame = useRef()
    const init = useRef(performance.now())
    const last = useRef(performance.now())

    const render = time => {
        const now = performance.now()
        // const time = (now - init.current) / 1000

        var tFraction = (time - init) / 5000
        if (tFraction > 1) tFraction = 1

        cb({ time })

        if (tFraction < 1) {
            last.current = now
            frame.current = requestAnimationFrame(render)
        }
    };

    useEffect(() => {
        frame.current = requestAnimationFrame(render)
        return () => cancelAnimationFrame(frame.current)
    }, deps)
}

export default useRender