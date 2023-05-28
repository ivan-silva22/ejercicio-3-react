import { useState } from "react";

function Titulo(props){

    const [msj, setMsj] = useState('')

    return (
        <div>
            <h1>Hello {props.nuevoTitulo} {msj}</h1>
            <button onClick={()=> setMsj('from changed state')}>Click me</button>
        </div>
    );
}

export default Titulo;