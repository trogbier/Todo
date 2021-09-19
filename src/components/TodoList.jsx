import React, {useEffect, useState} from 'react';
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => setIsOpen(!isOpen);

    const saveTask = (task) => {
        const newList = [...taskList, task]
        localStorage.setItem("taskList",JSON.stringify(newList))
        setTaskList(newList)
    }
    useEffect(()=>{
        if (localStorage.getItem("taskList")){
            const data = localStorage.getItem("taskList")
            const listTask = JSON.parse(data)
            setTaskList(listTask)
        }
    },[])

    return (
        <>
            <div className={'header text-center'}>
                <h1>TodoList</h1>
                <button className={'btn btn-primary mt-2'} onClick={() => setIsOpen(true)}>create task</button>
            </div>
            <div className={'task-container'}>
                {taskList.map((task, id) => {
                    return (
                        <div key={id}>
                            <h1>{task.name}</h1>
                            <p>{task.description}</p>
                        </div>
                    )
                })}
            </div>
            <CreateTask toggle={toggle} isOpen={isOpen} save={saveTask}/>
        </>
    );
};

export default TodoList;