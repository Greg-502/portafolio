import React from "react"
import useNearScreen from "src/utils/Hooks/useNearScreen"
import Projects from "src/components/Projects/Projects"
import Contact from "src/components/Contact/Contact"

function AditionalInfo () {
    const { isNearScreen, fromRef } = useNearScreen({ distance:'200px' })

    return(
        <div ref={ fromRef }>
            { isNearScreen && 
                <>
                    <Projects /> 
                    <Contact /> 
                </>
            }
        </div>
    )
}

export default React.memo(AditionalInfo)