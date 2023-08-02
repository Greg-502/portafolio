import { createContext, useRef, useState } from 'react'
import { HandleScroll } from 'src/utils/Functions/HandleScroll'

export const RefContext = createContext()

export const RefProvider = ({ children }) => {
    const menu = useRef()
    const skills = useRef()
    const projects = useRef()
    const footer = useRef()
    
    return(
        <RefContext.Provider value={{
            menu, skills, projects, footer, HandleScroll
        }}>
            { children }
        </RefContext.Provider>
    )
}
