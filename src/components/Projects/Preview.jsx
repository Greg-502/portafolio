import { motion } from "framer-motion"

import { Link } from "react-router-dom"
import Header from "./Header"

export default function Preview({ id, name, description, img_webp, img_jpg }) {
    return(
        <div className={`${parseInt(id) === 2 && `flex items-center`}`}>
            { parseInt(id) === 1 && <Header /> }

            <div className={ 'w-full border-slate-900 border-t dark:border-slate-600' }>
                <div className="grid grid-cols-2 justify-between pt-2 items-center">
                    <h3 className="capitalize text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100">
                        { name }
                    </h3>

                    <div className="flex justify-end">
                        <Link to={`/detail/${ name }`} className="flex">
                            <box-icon type='solid' name='right-top-arrow-circle' color='#a855f7' size='md'></box-icon>
                        </Link>
                    </div>
                </div>
                <p className='tracking-wide text-slate-500 dark:text-slate-400 text-normal py-2'>{ description }</p>
                <Link to={`/detail/${ name }`}>
                    {
                        <picture>
                            <source srcSet={`${ import.meta.env.VITE_VERCEL_IMAGE+`${ img_webp }`}`} type="image/webp" />
                            <source srcSet={`${import.meta.env.VITE_VERCEL_IMAGE+`${ img_jpg }`}`} type="image/png" />

                            <motion.img
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className='shadow-lg object-cover max-w-full md:hover:shadow-xl mt-4'
                                src={`${ import.meta.env.VITE_VERCEL_IMAGE+`${ img_webp }`}`}
                                alt={ `Proyecto: ${ name } ` }
                                width="100%"
                                height="100%">
                            </motion.img>
                        </picture>
                    }
                </Link>
            </div>
        </div>
    )
}