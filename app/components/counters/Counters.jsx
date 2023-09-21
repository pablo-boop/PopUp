"use client";

import Link from 'next/link'
import { useState } from 'react'

function Counter({valorPadrao, agregacao, limitMin, limitMax}) {
    limitMin = valorPadrao
    let defaultCounter = valorPadrao;

    const [contador, setContador] = useState(valorPadrao);
    
    const add = () => {
        setContador(contador < limitMax ? contador + agregacao : contador);
    }

    const remove = () => {
        setContador(contador > limitMin ? contador - agregacao : limitMin);
    }

    const reset = () => {
        setContador(defaultCounter)
    }

    return (
        <div>
            <h1>Página do Contador</h1>
            <Link href={'/'}>Voltar pra Home</Link>
            <>
                <p><strong>Contador: </strong>{contador}</p>
                <button onClick={add}>Adicionar</button>
                <button onClick={remove}>Remover</button>
                <button onClick={reset}>Resetar</button>
            </>
        </div>
    )
}

export default Counter;