"use client"

import Link from "next/link";
import { useState } from "react";
import Task from "../components/task/Task";
import Msg from "../components/popUp/PopUp";

const Input = () => {
    const empty = '';
    const [task, setTask] = useState(empty);
    const [taskList, setTaskList] = useState([])

    const addTask = () => {
        if (task.trim() != '') {
            setTaskList([...taskList, task]);
            setTask(empty)
        } else {
            alert("erro")
        }
    }

    return (
        <div>
            <h1>Home Page</h1>
            <Link href={'/'}>Voltar pra Home</Link>
            <div>
                <h3>To-Do List</h3>
                <input type="text" placeholder="Digite nova tarefa" value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTask}>Cadastrar</button>
            </div>
            {
                taskList.map((task, index) => (
                    <div key={index}>
                        <Task index={index} task={task}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Input;