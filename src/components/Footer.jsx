import { RefContext } from "src/utils/Context/RefContext"
import { GetYear } from "src/utils/Functions/GetYear"
import { useContext } from "react"

export default function Footer(){
    const { footer } = useContext(RefContext)

    return(
        <footer ref={ footer } className="items-center text-slate-900 dark:text-slate-400 bg-yellow-300 dark:bg-slate-900 flex flex-col">
            <div
                className='md:max-w-7xl w-full md:justify-evenly text-sm px-6 md:px-12'>
                    <div className="flex flex-col-reverse border-t border-slate-800 dark:border-slate-600 py-6 md:py-0 md:col-span-3 md:grid md:grid-cols-2">
                        <div className="md:py-4">
                            <p>© 2022 - { GetYear() } Todos los derechos reservados.</p>
                        </div>
                        <div className="md:py-4 md:flex md:justify-end">
                            <a href='https://dribbble.com/tanim_ui' target='_blank' rel="noreferrer" className='md:underline dark:hover:text-slate-100 hover:text-slate-700'>
                                Inspirado por Tanim Khan
                            </a>
                        </div>
                    </div>
            </div>
        </footer>
    )
}