export default function Errors() {
    return(
        <div className='space-y-5 flex flex-col justify-center items-center md:col-span-3 text-slate-900 dark:text-slate-400 text-lg '>
            <box-icon type='solid' name='error-circle' size='lg' animation='tada' color='#a855f7'></box-icon>
            <span>Error. Más detalles en la consola.</span>
        </div>
    )
}