"use client";

import Counter from '../components/counters/Counters';

function PageCounter() {
    return (
        <>
        <Counter
            valorPadrao={5}
            agregacao={5}
            limitMin={5}
            limitMax={100}
        />
        </>
    )
}

export default PageCounter;