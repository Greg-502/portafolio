import { useState, useEffect, useRef } from "react"

export default function useNearScreen ({ distance = '200px', once = true} = {}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()
    
    useEffect(() => {
        const onchange = (entries, observer) => {
            const el = entries[0]
            
            if (el.isIntersecting){
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }

        const observer = new IntersectionObserver(onchange, {
            rootMargin: distance
        })

        observer.observe(fromRef.current)
        return () => observer && observer.disconnect()
    }, [fromRef, distance, once])

    return { isNearScreen, fromRef }
}

