import useFetchRequest from 'src/utils/Hooks/useFetchRequest'
import React, { lazy } from 'react';
import Errors from 'src/components/Generic/Errors';
import LoadImage from './LoadImage';
const Preview = lazy(() => import('./Preview'))

function Projects() {
    const [ data, loading, error ] = useFetchRequest("json/projects.json")

    return(
        <section className='text-left flex justify-center items-center min-h-full px-6 md:px-2 flex-col py-10 md:py-0 bg-slate-50 dark:bg-slate-800'>
            <div className={`w-full md:p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:justify-evenly md:max-w-7xl`}>
                { loading && <LoadImage /> }
                { error && <Errors /> }
                {
                    data && data.map((element) => {
                        return(
                            <Preview
                                key={element.id} 
                                id={element.id} 
                                name={element.name}
                                description={element.description}
                                img_webp={element.img_webp}
                                img_jpg={element.img_jpg}
                            />        
                        )
                    })
                }
            </div>
        </section>
    )
}

export default React.memo(Projects)