import 'boxicons'
import React, { Suspense, useContext } from 'react'
import { RefContext } from 'src/utils/Context/RefContext'
import useNearScreen from 'src/utils/Hooks/useNearScreen'
import ButtonToTop from './ButtonToTop'
import Loader from 'src/components/Generic/Loader'
import AditionalInfo from 'src/pages/AditionalInfo'

export default function SwipeContainer () {
    const { isNearScreen, fromRef } = useNearScreen({ distance:'200px', once:false })
    const { projects } = useContext(RefContext)
    
    return (
        <div ref={ fromRef } className="bg-yellow-300 dark:bg-slate-900">
            <div ref={ projects }></div>
            
            { isNearScreen && <ButtonToTop /> }
    
            <Suspense fallback={ <Loader/> }>
                <AditionalInfo />
            </Suspense>
        </div>
    )
}
