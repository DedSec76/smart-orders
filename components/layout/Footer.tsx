//const date = new Date()
//console.log(date.getFullYear())

export default function Footer({isHome=false}) {
    const date = new Date

    return (
        <footer className="mx-6 my-6">
            {isHome ? <h1>Contact Us</h1> : ""}
            
            <p className="text-center">&copy; {date ? <span>{date.getFullYear()}</span> : ""} Desarrollado por Aldair Rutte Bazán</p>
            { date ? <p className="text-center">{date.toLocaleString("es-PE", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric"
            })}
            </p> : "" }
        </footer>
    )
}