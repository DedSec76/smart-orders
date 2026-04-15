
export default function ButtonSimple({text="Press me"}) {
    return (
        <button className="bg-[var(--accent-color)]
                           my-4
                           py-4 px-7
                           text-black
                           text-lg
                           rounded-4xl
                           cursor-pointer
                           hover:text-white hover:bg-[var(--secondary-color)]">{text}</button>
    )
}