import React, { useState} from 'react';
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => setIsOpen(!isOpen);

    const saveTask = (task) => {
        setTaskList([...taskList, task])
    }

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