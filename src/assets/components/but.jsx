function But(props) {
    //Componente de Butão
    return <button className={props.clas} id={props.id} onClick={props.fun}>{props.tx}</button>
}
export default But