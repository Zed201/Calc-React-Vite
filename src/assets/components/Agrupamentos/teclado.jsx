import { useContext } from "react"
import Butao from "../but"
import { contexto } from "../../context"
import "../../css/buts.css"
function Teclado() {
    const { valorC, setValorC, valorB, setValorB, setPare } = useContext(contexto)
    const ht = document.getElementById("hist")
    function Apagar() {
        let nume = String(valorC).split('')//divide em um arry para 'zerar' o último dígito
        if (nume[nume.length - 1] === ")") {
            setPare(true)
        }
        nume[nume.length - 1] = ""
        setValorC(String(nume.join('')))
        if (nume.length === 1 | isNaN(valorB)) {
            setValorB('')//Para não dar erro e ficar aparecendo NaN no input de baixo
        } //apaga os números de cima e como usa o useEffect ele atualiza o de cima sozinho com as regras dos dígitos para não dar erro no eval
    }
    function Trocar() {
        let htItem = document.createElement("li")
        htItem.innerHTML = `${valorC} =>  ${valorB}`
        ht.appendChild(htItem)
        setValorC(String(valorB))//Atribuído ao igual ele troca os valores dos inputs[Pode adicionar algo como um histórico no futuro facilmente, só pegar os valores de cima e de baixo]
    }
    return (
        <div id="teclado">
            <div id="tecNumeros">
                {/*Botões de Números*/}
                <Butao classe="num" entr={1} tx={1}/>
                <Butao classe="num" entr={2} tx={2}/>
                <Butao classe="num" entr={3} tx={3}/>
                <Butao classe="num" entr={4} tx={4}/>
                <Butao classe="num" entr={5} tx={5}/>
                <Butao classe="num" entr={6} tx={6}/>
                <Butao classe="num" entr={7} tx={7}/>
                <Butao classe="num" entr={8} tx={8}/>
                <Butao classe="num" entr={9} tx={9} />
                <Butao classe="num" entr="(" tx="(...)"/>
                <Butao classe="num" entr={0} tx={0} />
            </div>
            <div id="tecOpes">
                {/*Botões das Operações*/}
                <button onClick={()=>Apagar()} className="Ope">&lt;</button>
                <Butao classe="Ope" entr="+" tx="+"/>
                <Butao classe="Ope" entr="-" tx="-"/>
                <Butao classe="Ope" entr="*" tx="X"/>
                <Butao classe="Ope" entr="/" tx="/"/>
                <button className="Ope" onClick={Trocar}>=</button>
            </div>
        </div>
    )
}
export default Teclado