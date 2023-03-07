/* eslint-disable no-eval */
import But from "../but"
import "../../css/But.css"
import TelaNum from "./TelaNum"
import React, { useState, useEffect } from 'react';

function TecladoNum() {
    var [valorC, setValorC] = useState('')//Iniciação dos State, valorC: Valor do input de cima, o maior/ ValorB: valor do input de baixo, campo de resultados
    var [valorB, setValorB] = useState('')
    var [pare, setPare] = useState(false)
    useEffect(() => {
        let numi = valorC.split('')
        numi = numi[numi.length - 1]
        if (isNaN(Number(numi)) || pare ) {
            //Não faz nada pois o eval buga a página toda caso tenha um não número como último dígito como último dígito
        }
        if ((!isNaN(Number(numi)) && !pare) || numi === ")") {
            setValorB(eval(String(valorC)))// caso o último dígito seja um número ele faz normal o eval
        }
    }, [valorC, pare])
    function Trocar() {
        setValorC(String(valorB))//Atribuído ao igual ele troca os valores dos inputs[Pode adicionar algo como um histórico no futuro facilmente, só pegar os valores de cima e de baixo]
    }
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
        return (
            <>
                <div id="telaNum">{/*Basicamente trás o componente que tem os dois inputs juntos para facilitar tudo*/}
                    <TelaNum valorcima={valorC} valorbaixo={valorB} />
                </div>
            <div id="butoes">
                <div id="numeros">{/*Butões dos números*/}
                    <But tx="1" clas="Num" fun={() => AddEntr(1)} />
                    <But tx="2" clas="Num" fun={() => AddEntr(2)} />
                    <But tx="3" clas="Num" fun={() => AddEntr(3)} />
                    <But tx="4" clas="Num" fun={() => AddEntr(4)} />
                    <But tx="5" clas="Num" fun={() => AddEntr(5)} />
                    <But tx="6" clas="Num" fun={() => AddEntr(6)} />
                    <But tx="7" clas="Num" fun={() => AddEntr(7)} />
                    <But tx="8" clas="Num" fun={() => AddEntr(8)} />
                    <But tx="9" clas="Num" fun={() => AddEntr(9)} />
                </div>
                <div id="operacoes">{/*Butões das operações*/}
                    <But tx="<" clas="Ope" id="apagar" fun={Apagar} />
                    <But tx="+" clas="Ope" id="mais" fun={() => AddEntr("+")} />
                    <But tx="-" clas="Ope" id="menos" fun={() => AddEntr("-")} />
                    <But tx="X" clas="Ope" id="vezes" fun={() => AddEntr("*")} />
                    <button className="Ope" id="divis" ><p id="pdivis" onClick={() => AddEntr("/")}>/</p></button>{/*Tem um p dentro do button para conseguir fazer a aninação do / deitando pois o html do button por si só não funciona */}
                    <But tx="=" clas="Ope" id="resu" fun={Trocar} />
                </div>
            <div id="zeros">{/*Zero, colocado separado apenas para ficar certinho no grid */}
                        <But tx="0" clas="Num" fun={() => AddEntr(0)} />
                        <button id="paren" className="Num" onClick={() => AddEntr("(")}>()</button>
            </div>
                </div>
            </>
        )
    }
    export default TecladoNum