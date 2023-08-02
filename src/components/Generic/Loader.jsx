import { Ring } from '@uiball/loaders'

export default function loader() {
    return(
        <div className='space-y-5 p-5 flex flex-col justify-center items-center md:col-span-3'>
            <Ring 
                size={40}
                lineWeight={5}
                speed={2} 
                color="#a855f7" 
            />

            <span className="text-slate-900 dark:text-slate-400 ">Espere...</span>
        </div>
    )
}