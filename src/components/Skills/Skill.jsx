export default function Skill({ title, list }) {
    return(
        <div className="border-t border-slate-900 dark:border-slate-600 pb-2 md:pb-0 pt-5">
            <h3 className="text-2xl lg:text-3xl font-bold truncate text-slate-900 dark:text-slate-100">{ title }</h3>

            <ul className="pt-2 text-md text-slate-900 dark:text-slate-400">
                {
                    list.map((element) => {
                        return(
                            <li className="truncate"
                                key = { element.id }
                            >
                                { element.languaje }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
