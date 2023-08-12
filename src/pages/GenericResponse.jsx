import { Link, useParams } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import SEO from "src/components/Generic/SEO";
import { useContext } from "react";
import { RefContext } from "src/utils/Context/RefContext";

export default function GenericResponse({ message }){
    const isPresent = useIsPresent();
    const { project } = useParams()
    const { PATH_IMAGE } = useContext(RefContext)

    return(
        <>
            <SEO
                title={`${ project ? `Proyecto: ${ project }` :`404 no encontrado` } | Greg Puac Portafolio`}
                description={`${ project ? `Proyecto: ${ project }` : `404 no encontrado`}`}
                url={`https://www.gregpuac.dev/detail/${ project ? `${ project}` : `404`}/`}
                type="summary_large_image"
                image={`${ PATH_IMAGE + 'images/Imagen.webp'}`}
            />

            {
                <section className='items-center flex justify-center h-screen px-6 md:px-12 flex-col py-10 md:py-0'>
                    <div className="w-full md:max-w-7xl md:p-10 items-center flex justify-center flex-col">
                        <picture>
                            <source srcSet={`${ PATH_IMAGE + 'images/NotFoundPage.webp'}`} type="image/webp" />
                            <source srcSet={`${ PATH_IMAGE + 'images/NotFoundPage.png'}`} type="image/png" />
                            <img 
                                className='bg-yellow-300 dark:bg-slate-900 rounded-full shadow-lg object-cover w-40'
                                src={`${ PATH_IMAGE + 'images/NotFoundPage.webp'}`}
                                alt={'Página no encontrada'}
                                width="100%"
                                height="100%">
                            </img>
                        </picture>
                        <h2 className="text-slate-900 dark:text-slate-100 tracking-tight mt-4 text-3xl font-extrabold capitalize">{ project ? project : 'Oops...' }</h2>
                        <span className="tracking-wide py-4 text-slate-600 dark:text-slate-400">{ message || 'Esta página no existe.' }</span>

                        <motion.div 
                            whileHover={{ scale:1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className='mt-4'
                        >
                            <Link to='/' 
                                className="tracking-wide rounded-2xl text-lg md:text-md px-5 cursor-pointer py-4 text-slate-100 bg-purple-500 hover:bg-purple-400 shadow-lg">
                                Volver al inicio
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ scaleX:1 }}
                        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                        style={{ originX: isPresent ? 0 : 1 }}
                        className="top-0 bottom-0 left-0 right-0 z-20 fixed bg-purple-500"
                    >
                    </motion.div>
                </section>
            }
        </>
    )
}