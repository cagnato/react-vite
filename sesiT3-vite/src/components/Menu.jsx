import style from "./Menu.module.css"

export default function Menu(){
    return(
        <nav className={style.navBar}>
            <p><a href={`/`}>Home</a></p>
            <p><a href={`/calc`}>Calculos</a></p>
            <p><a href={`/contact`}>Contato</a></p>
        </nav>
    )
}