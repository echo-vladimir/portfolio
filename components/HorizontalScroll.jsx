import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import styles from "./HorizontalScroll.module.scss"
import { useAnimation } from "./Effects"

export default function HorizontalScroll({ children }) {
    const scrollContainer = useRef(null)
    const [scrolledToY, setScrolledToY] = useState(0)
    const [animating, isAnimating] = useState(true)

    const [totalSections, setTotalSections] = useState(0)
    const [currentSection, setCurrentSection] = useState(0)
    const resize = () => {
        const element = scrollContainer.current
        const totalSections = Math.round(element.scrollLeftMax / window.innerWidth) + 1

        setTotalSections(totalSections)
    };

    useEffect(() => {
        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, []);

    useEffect(() => {
        const element = scrollContainer.current

        if (element) {
            const onWheel = event => {
                event.preventDefault()

                const totalSections = Math.round(element.scrollLeftMax / window.innerWidth + 1)
                setTotalSections(totalSections)

                const step = scrolledToY + event.deltaY * 6
                const section = Math.round(scrolledToY / window.innerWidth + 1, 1)

                if (step < 0) {
                    setCurrentSection(section)
                    setScrolledToY(1)
                    return
                }

                if (step >= element.scrollLeftMax) {
                    setScrolledToY(element.scrollLeftMax)
                    setCurrentSection(section)
                    return
                }

                setCurrentSection(section)
                setScrolledToY(step)
            }

            element.addEventListener("wheel", onWheel)
            return () => element.removeEventListener("wheel", onWheel)
        }
    }, [scrolledToY, totalSections, currentSection])

    useAnimation("bounceEaseOut", 5000, progress => {
        if (progress === 1) return isAnimating(false)
        const element = scrollContainer.current
        const currentPositionY = scrollContainer.current.scrollLeft
        const currentYMax = element.scrollLeftMax
        setScrolledToY(currentYMax * progress)
        setCurrentSection(Math.round(currentYMax * progress / window.innerWidth + 1))
    }, animating)

    useEffect(() => {
        const element = scrollContainer.current
        element.scrollTo({
            left: scrolledToY,
            behavior: "smooth",
        })
    }, [scrolledToY])

    const start = event => {
        event.preventDefault()
        setScrolledToY(0)
    }

    const prev = (event) => {
        event.preventDefault()
        if (scrolledToY >= 0)
            setScrolledToY(scrolledToY - 800)
    }

    const next = (event) => {
        event.preventDefault()
        const element = scrollContainer.current
        const currentYMax = element.scrollLeftMax

        if (scrolledToY <= currentYMax)
            setScrolledToY(scrolledToY + 800)
    }

    return (
        <>
            <div ref={scrollContainer} className={styles["scroll-container"]}>
                <div className={styles["scroll-content"]}>
                    {children}
                </div>
            </div>
            <div className={styles["scroll-nav"]}>
                <ul className={styles.menu}>
                    <li className={styles.button}>
                        <Link href="" onClick={start}>
                            &#8592; В начало
                        </Link>
                    </li>
                    <li className={styles.button}>
                        <Link href="" onClick={prev}>
                            &#8592; Prev [esc + a]
                        </Link>
                    </li>
                    <li className={styles.index}>
                        {`${currentSection} / ${totalSections}`}
                    </li>
                    <li className={styles.button}>
                        <Link href="" onClick={next}>
                            [esc + d] Next &#8594;
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}