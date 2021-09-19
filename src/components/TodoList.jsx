import React, {useState} from 'react';
import CreateTask from "../modals/CreateTask";

const TodoList = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <div className={'header text-center'}>
                <h1>TodoList</h1>
                <button className={'btn btn-primary mt-2'} onClick={()=>setModal(true)}>create task</button>
            </div>
            <div className={'task-container'}>

            </div>
            <CreateTask toggle={toggle} modal={modal}/>
        </>
    );
};

export default TodoList;