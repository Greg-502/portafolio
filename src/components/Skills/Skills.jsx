import Skill from "./Skill"
import useFetchRequest from 'src/utils/Hooks/useFetchRequest'
import Loader from "src/components/Generic/Loader"
import Errors from "src/components/Generic/Errors"
import { motion } from "framer-motion";
import { useContext } from "react";
import { RefContext } from "src/utils/Context/RefContext";

export default function Skills () {
    const [ data, loading, error ] = useFetchRequest("json/skills.json")
    const { skills } = useContext(RefContext)
    
    return(
        <motion.section 
            initial={{ opacity:0, scale:0.5 }}
            animate={{ opacity:1, scale:1 }}
            transition={{
                duration:0.8,
                delay:0.6,
                ease:[0, 0.71, 0.2, 1.01]
            }}
            ref={ skills } className={`bg-yellow-300 dark:bg-slate-900  items-center flex justify-center min-h-full px-6 md:px-2 flex-col py-10 md:py-0`}>
            <div className="md:max-w-7xl w-full md:p-10 grid md:grid-cols-3 gap-10 md:justify-evenly">
                <div>
                    <p className="text-purple-800 dark:text-purple-500 font-bold ">Habilidades</p>
                    <h2 className="tracking-tight text-5xl lg:text-7xl font-bold truncate dark:text-slate-100 text-slate-900">
                        Techs
                    </h2>
                </div>
                <div className={`col-span-2 grid lg:grid-cols-3 gap-10 justify-evenly ${ loading ? 'items-center grid-cols-1' : 'grid-cols-2' } `}>
                {
                    loading ? <Loader /> : 
                    error ? <Errors /> :
                    <>
                        {
                            data && data.map((element) => (
                                <Skill
                                    key={ element.id }
                                    title = { element.name }
                                    list = { element.list }
                                />
                            ))
                        }
                    </>
                }
                </div>
            </div>
        </motion.section>
    )
}
