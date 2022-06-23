import { useEffect, useRef } from 'react'

const Scroll = ({ className, children }) => {
    const ref = useRef()

    useEffect(() => {
        const el = ref.current
        if (el) {
            const onWheel = e => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 5,
                    behavior: 'smooth'

                })
            }
            el.addEventListener('wheel', onWheel)
            return () => el.removeEventListener('wheel', onWheel)
        }
    }, [])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}

export default Scroll