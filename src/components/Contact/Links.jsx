import SVGLogos from './SVGLogos'

export default function Links({ data }) {

    return(
        <div className="flex border-t border-slate-900 dark:border-slate-600 pt-2 space-x-5">
            <span
                className='bg-slate-50 text-slate-900 rounded-full w-14 h-14 p-3 mt-4 flex justify-center items-center'>
                <SVGLogos
                    name={data.name}
                    icon={data.icon}
                />
            </span>

            <div className='flex justify-center mt-4 flex-col text-left'>
                <h3 className="text-sm truncate font-bold text-slate-900 dark:text-slate-100 tracking-wide">{ data.name }</h3>
                <div>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={ `${ data.name === 'Email' ? `mailto:${data.address}` : data.address }` }
                        className="text-md truncate text-slate-900 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                    >
                        { data.text }
                    </a>
                </div>
            </div>
        </div>
    )
}
