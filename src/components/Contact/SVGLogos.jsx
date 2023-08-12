export default function SVGLogos ({name, icon}) {
  return(
    <svg
      viewBox={`${name === 'GitHub' ? '0 0 24 24' : '0 0 1024 1024'}`}
      fill="currentColor"
      aria-labelledby={`Link for go to my: ${name}`}
    >
      <path d={icon} />
    </svg>
  )
}