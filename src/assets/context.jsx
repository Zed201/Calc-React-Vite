//Criação de um contexto para compartilhar diversos dados
import { createContext, useState } from "react";
export const contexto = createContext()
    
export function Ctx(props) {
    const [valorC, setValorC] = useState("")
    const [valorB, setValorB] = useState("")
    const [pare, setPare] = useState(false)
    return (
        <contexto.Provider value={{valorC, setValorC, valorB, setValorB, pare, setPare}}>
            {props.children}
        </contexto.Provider>
    )
}
Ctx.propTypes = {
    children: Element
}