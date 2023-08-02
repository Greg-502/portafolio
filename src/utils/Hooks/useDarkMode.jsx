import { useEffect, useState } from "react"

export default function useDarkMode () { 
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        switch (darkMode) {
            case "dark":
                document.documentElement.classList.add("dark")
                localStorage.setItem("theme", "dark")
                break;
            case "light":
                document.documentElement.classList.remove("dark")
                localStorage.setItem("theme", "light")
                break;
            default:
                return;
        }
    }, [darkMode])

    return [ darkMode, setDarkMode ]
 }