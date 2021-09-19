import React, {useEffect, useState} from 'react';
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

const TodoList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => setIsOpen(!isOpen);

    const saveTask = (task) => {
        const newList = [...taskList, task]
        localStorage.setItem("taskList", JSON.stringify(newList))
        setTaskList(newList)
    }
    useEffect(() => {
        if (localStorage.getItem("taskList")) {
            const data = localStorage.getItem("taskList")
            const listTask = JSON.parse(data)
            setTaskList(listTask)
        }
    }, [])
    const deleteHandler = (id) => {
        const newList = [...taskList.filter(task => task.id !== id)]
        localStorage.setItem("taskList", JSON.stringify(newList))
        setTaskList(newList)
    }
    const updateTask = ({name, id, description}) => {
        const newList = [...taskList.map(task => task.id === id ? {...task, name, description} : {...task})]
        localStorage.setItem("taskList", JSON.stringify(newList))
        setTaskList(newList)
    }
    return (
        <>
            <div className={'header text-center'}>
                <h1>TodoList</h1>
                <button className={'btn btn-primary mt-2'} onClick={() => setIsOpen(true)}>create task</button>
            </div>
            <div className={'task-container'}>
                {!taskList[0]?<h2>You can create new task</h2>:null}
                {taskList && taskList.map((task, id) => {
                    return (
                        <Card key={Date.now() + `${id}`} name={task.name} id={task.id} description={task.description}
                              index={id} updateTask={updateTask} deleteHandler={deleteHandler}/>
                    )
                })}
            </div>
            <CreateTask toggle={toggle} isOpen={isOpen} save={saveTask}/>
        </>
    );
};

export default TodoList;