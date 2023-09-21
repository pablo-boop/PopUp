"use client"

import Msg from "../components/popUp/PopUp";
import { useState } from "react"

const PagePopUp = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    const [PopUpType, setPopUpType] = useState('')
    const [PopUpMessage, setPopUpMessage] = useState('')


    const handleShowPopUp = (message, type, time) => {
        setPopUpType(type)
        setPopUpMessage(message)
        setShowPopUp(true)
        setTimeout(() => {
            setShowPopUp(false)
        }, time)
    } 

    return (
        <div>
            <h1>PopUp Page</h1>
            <div>
                <button onClick={() => handleShowPopUp('Erro ao processar', 'error', 3000)}>PopUp de erro</button>
                <button onClick={() => handleShowPopUp('Sucesso, parabéns', 'success', 4000)}>PopUp de sucesso</button>
            </div>
            <>
                {
                    showPopUp && (
                        <Msg content={PopUpMessage} type={PopUpType}/>
                    )
                }
            </>
        </div>
    )
}

export default PagePopUp;