import { useState } from "react";

function Titulo(props){

    const [msj, setMsj] = useState('')

    return (
        <div className="p-3">
            <h1>Hello {props.nuevoTitulo} <span>{msj}</span></h1>
            <button className="btn btn-primary" onClick={()=> setMsj('from changed state')}>Click me</button>
        </div>
    );
}

export default Titulo;