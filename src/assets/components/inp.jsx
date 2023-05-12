import { useContext } from "react"
import { contexto } from "../context"
import "../css/Inp.css"
function Tela() {
    const {valorC, valorB} = useContext(contexto)
    return (
        <div id="tela">
            {/*Inicialização dos inputs que servem como tela*/}
            <input type="string" id="superior" value={valorC} readOnly/>
            <input type="number" id="inferior" value={valorB} readOnly/>
        </div>
    )
}
export default Tela