
export default function Link({ href="#", text=""}) {
    return (
        <a className="text-xl
                      hover:text-[var(--accent-color)]" href={href}>{text}</a>
    )
}