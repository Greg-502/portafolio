export default function SVGLogos ({name, icon, address}) {
  return(
    <a 
      aria-label={`${name}`} 
      target="_blank" 
      rel="noreferrer" 
      title={`${name}`} 
      href={`${name==='Email' ? `mailto:${address}` : address }`}
      className='w-7 h-7 cursor-pointer text-slate-900 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400'
    >
      <svg 
        viewBox={`${name==='GitHub' ? '0 0 24 24' : '0 0 1024 1024' }`} 
        fill="currentColor"
        aria-labelledby={`Cuenta de ${name}`}
      >
        <path d={icon} />
      </svg>
    </a>
  )
}