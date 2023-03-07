import Entr from "../inpt";
import '../../css/Inp.css'

function TelaNum(props) {
    return (
        <> {/*Basicamente a tela que une os inputs apenas para ficar "mais organizado" */}
            <Entr id="superior" value={props.valorcima}  /> 
            <Entr id="inferior" value={props.valorbaixo} />
        </>
    )
}
export default TelaNum
//Fazer uma versão em que o calculo não precisa clicar no = e usar o onchange