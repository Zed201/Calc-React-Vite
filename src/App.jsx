import { useContext, useEffect } from "react"
import { contexto } from './assets/context'
import Tela from "./assets/components/inp.jsx"
import Teclado from "./assets/components/agrupamentos/teclado.jsx"
import "./assets/css/index.css"

function App() {
  const {valorC, setValorB, pare} = useContext(contexto)
  useEffect(() => {
    let numi = valorC.split('')
    numi = numi[numi.length - 1]
    if (isNaN(Number(numi)) || pare ) {
        //Não faz nada pois o eval buga a página toda caso tenha um não número como último dígito como último dígito
    }
    if ((!isNaN(Number(numi)) && !pare) || numi === ")") {
        setValorB(eval(String(valorC)))// caso o último dígito seja um número ele faz normal o eval
    }
  }, [valorC, pare, setValorB])
  return (
    <div id="tudo">
        <Tela/>
      <Teclado />
      <p>Histórico:</p>
      <ul id="hist"></ul>
    </div>
  )
}

export default App

