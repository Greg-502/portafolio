import useFetchRequest from 'src/utils/Hooks/useFetchRequest'
import Loader from 'src/components/Generic/Loader';
import Errors from 'src/components/Generic/Errors';
import React, { lazy } from 'react';
const Links = lazy(() => import('./Links'))

function Contact() {
    const [ data, loading, error ] = useFetchRequest("json/links.json")

    return(
        <section className='items-center bg-yellow-300 dark:bg-slate-900 flex justify-center min-h-full px-6 md:px-2 flex-col py-10 md:py-0'>
            <div className="md:max-w-7xl w-full grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:justify-evenly md:p-10">
                <div>
                    <span className="text-purple-800 dark:text-purple-500 font-bold">Sobre mí</span>
                    <h2 className="tracking-tight text-5xl lg:text-7xl font-bold dark:text-slate-100 text-slate-900 truncate">
                        Contacto
                    </h2>
                </div>
                { loading && <Loader /> }
                { error && <Errors /> }
                {    
                    <div className={`md:col-span-2 md:grid grid-cols-1 md:grid-cols-2 md:gap-10 md:justify-evenly ${ loading && 'items-center' } space-y-10 md:space-y-0`}>
                        {
                        data && data.map((element) => {
                            return(
                                <Links
                                    key = { element.id }
                                    data = { element }
                                />
                            ) 
                        })
                        }
                    </div>
                }
            </div>
        </section>
    )
}

export default React.memo(Contact)
