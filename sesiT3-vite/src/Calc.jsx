import style from "./Calc.module.css"
import Menu from "./components/Menu"


export const Calc = () => {


    return(
        <>
            <Menu/>
            <div className={style.wrapCalc}>
                <h1>Calculos</h1>
            </div>
        </>
    )
}