"use client"
import { useState } from "react"
import './popup.modules.css'

const Msg = ({content, type}) => {
    let color = (type == "success") ? 'success' : 'error';
    let style = 'mainCard' + ' ' + color;



    return (
        <div className={style}>
            <p>{content}</p>
        </div>
    )
}

export default Msg;