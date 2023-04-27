import PropTypes from 'prop-types'
import { useContext } from 'react'
import { contexto } from '../context'

function Butao(props) {
    var {pare, valorC, setValorC, setPare} = useContext(contexto)
    
    function AddEntr(numb) {
        if (numb === "(") {
            if (!pare) {
                setValorC(valorC += numb)//Add dígitos ao input superior
                setPare(true)
            } else if (pare) {
                setValorC(valorC += ")")//Add dígitos ao input superior
                setPare(false)
            }
        } else {
            setValorC(valorC += numb)//Add dígitos ao input superior
        }
        
    }

    return (<button className={props.classe} id={props.id} onClick={()=>AddEntr(props.entr)}>{props.tx}</button>)
}
Butao.propTypes = {
    classe: PropTypes.string,
    id: PropTypes.string,
    entr: PropTypes.any,
    tx: PropTypes.any
}

export default Butao