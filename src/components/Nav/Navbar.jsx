import { useContext, useState } from 'react';
import { RefContext } from 'src/utils/Context/RefContext';
import { Spin as Hamburger } from 'hamburger-react';
import DarkMode from './DarkModeIcons';

export default function Navbar() {
    const [show, setShow] = useState(false)
    const { HandleScroll, menu, skills, footer } = useContext(RefContext)

    return(
        <header ref={ menu } className="px-2 w-full border-b dark:border-slate-600 border-slate-300">
            <nav className="container flex flex-wrap justify-between md:justify-center items-center mx-auto">
                <DarkMode />
                <div className="flex md:order-2 md:hidden">
                    <Hamburger color="#64748b" label="Show menu" hideOutline={false} toggled={show} toggle={setShow} size={24} />
                </div>
                <div className={`${ show ? 'block' : 'hidden' } relative justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="bg-slate-50 dark:bg-slate-700 md:dark:bg-slate-800  w-full z-20 absolute md:relative flex flex-col p-4 text-center rounded-lg shadow-xl md:shadow-none md:flex-row md:space-x-8 md:mt-0 tracking-wide">
                        <li 
                            onClick={ () => {
                                return(
                                    !setShow() &&
                                    HandleScroll(skills.current)
                                )
                            } }
                            className="nav-link block py-2 pr-4 pl-3 text-slate-600 dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-100 md:p-0 cursor-pointer border-b-2 border-slate-200 dark:border-slate-600 md:border-0 md:text-md "
                            >
                            Habilidades
                        </li>
                        <li 
                            onClick={ () => {
                                return(
                                    !setShow() &&
                                    HandleScroll(footer.current) 
                                )}
                            }
                            className="nav-link block py-2 pr-4 pl-3 dark:text-slate-400 text-slate-600 hover:text-slate-500 dark:hover:text-slate-100 md:p-0 cursor-pointer md:text-md "
                            >
                            Sobre mí
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
