import { useEffect, useRef } from "react"
import animations from "./animations"

// Bug fix for >14.x.x. version of the NodeJS
global.performance = global.performance || {
    now: () => new Date().getTime()
}

const useAnimation = (type, duration, draw, deps, mode, name = useAnimation.name) => {
    const animation = animations[type]
    const init = useRef(performance.now())
    const index = useRef(0)
    const frame = useRef()

    const debug = mode =>
        props =>
            (mode === "debug")
                ? console.log({
                    ...props
                }) : undefined

    const render = time => {
        let tracing = debug(mode)
        let timePassed = time - init.current
        let timer = timePassed / duration

        if (timer > 1) timer = 1

        let progress = animation(timer)

        tracing({
            name,
            type,
            rerender: ++index.current,
            seconds: Math.round(timePassed / 1000),
            progress
        })

        draw(progress)
        play(timer)
    }

    const play = timer => {
        if (timer < 1)
            frame.current = requestAnimationFrame(render)
    }

    useEffect(() => {
        frame.current = requestAnimationFrame(render)
        return () => cancelAnimationFrame(frame.current)
    }, [deps])
}

export default useAnimation