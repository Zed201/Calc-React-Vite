function Entr(props) {
   //Componente de input com id e o readOnly para 'previnir' com a questão do eval
    return <input type="text" id={props.id} readOnly value={props.value} />
}
export default Entr;