import { motion, useIsPresent } from 'framer-motion';
import { useContext } from 'react';
import { RefContext } from 'src/utils/Context/RefContext';
import useFetchRequest from 'src/utils/Hooks/useFetchRequest';
import SVGLogos from './Contact/SVGLogos';

export default function Header() {
    const isPresent = useIsPresent();
    const { PATH_IMAGE } = useContext(RefContext)
    const [ data ] = useFetchRequest("json/links.json")

    return(
        <div className='flex justify-center items-center flex-col py-10 px-6 md:px-2 min-h-screen md:min-h-full'>
            <div className="md:grid md:grid-cols-2 md:gap-10 md:justify-evenly md:max-w-full lg:max-w-7xl md:p-10">
                <motion.div 
                    initial={{ opacity:0, scale:0.5 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{
                        duration:0.8,
                        delay:0.2,
                        ease:[0, 0.71, 0.2, 1.01]
                    }}

                    className='text-center md:text-left flex justify-center flex-col lg:max-w-md'>
                    
                    <h1 className="text-purple-600 dark:text-purple-400  font-bold tracking-wide">Greg Puac</h1>
                    <p className='headers font-bold text-slate-900 dark:text-slate-100  text-6xl lg:text-8xl'>
                        Web Developer
                    </p>
                    
                    <div className='md:max-w-full tracking-wide py-4 leading-6 md:leading-7'>
                        <p className='text-slate-500 dark:text-slate-400 text-sm lg:text-base'>
                            Transeunte pero nunca expectante; como dijo Galeano:
                        </p>
                        <p className='text-slate-900 dark:text-slate-100 headers tracking-normal text-xl lg:text-2xl font-semibold italic'>
                            &quot;Si me caí, es porque estaba caminando.&quot;</p>
                    </div>
                    
                    <div className='tracking-wide flex justify-center md:justify-start gap-1 md:gap-3'>
                        <motion.a 
                            whileHover={{ scale:1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="my-2 rounded-2xl text-lg md:text-md px-4 text-center cursor-pointer py-4 text-slate-100 bg-purple-500 hover:bg-purple-400 shadow-lg"
                            target="_blank"
                            rel="noreferrer"
                            href={`mailto:${data && data[0].address}`}
                        >
                            Contáctame
                        </motion.a>

                        <div className='my-2 p-4 md:space-x-4 space-x-3 flex '>
                            {
                                data && data.map((element) => {
                                    return(
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={ `${ element.name === 'Email' ? `mailto:${element.address}` : element.address }` }
                                            key={element.id}
                                            className='w-7 h-7 cursor-pointer text-slate-900 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400'
                                        >
                                            <SVGLogos
                                                name={element.name}
                                                icon={element.icon}
                                            />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity:0, scale:0.5 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{
                        duration:0.8,
                        delay:0.3,
                        ease:[0, 0.71, 0.2, 1.01]
                    }}
                    className='flex justify-center items-center md:px-0 px-2 py-5 md:py-4'>
                        <picture>
                            <source srcSet={`${ PATH_IMAGE + "images/Imagen.webp"}`} type="image/webp" />
                            <source srcSet={`${ PATH_IMAGE + "images/Imagen.png"}`} type="image/png" />
                            <img 
                                className='shadow-lg object-cover rounded-full bg-yellow-300 dark:bg-slate-900 max-w-sm'
                                src={`${ PATH_IMAGE + "images/Imagen.webp"}`}
                                alt='Greg Puac memoji'
                                width="100%"
                                height="100%">
                            </img>
                        </picture>
                </motion.div>
            </div>
            
            <motion.div 
                initial={{ opacity:0, scale:0.5 }}
                animate={{ opacity:1, scale:1 }}
                transition={{
                    duration:0.8,
                    delay:1,
                    ease:[0, 0.71, 0.2, 1.01]
                }}
                className='mt-4 md:mt-0 flex justify-center'>
                    <svg
                        className="animate-bounce w-10 h-10 text-slate-600 dark:text-slate-400" 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
            </motion.div>

            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="top-0 bottom-0 right-0 left-0 fixed z-20 bg-purple-500"
            >
            </motion.div>
        </div>
    )
}

