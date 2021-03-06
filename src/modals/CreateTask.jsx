import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap';

const CreateTask = ({isOpen, toggle, save}) => {
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')

    const handleSave = () => {
        if (taskName && description) {
            const task = {name: taskName, description, id: Date.now()}
            save(task)
            setTaskName('')
            setDescription('')
        } else {
            alert('Введите данные')
        }
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <Form>
                    <div className={'form-group'}>
                        <label>Task name</label>
                        <input type="text" className={'form-control'} value={taskName}
                               onChange={e => e.target.value.length < 9 ? setTaskName(e.target.value) : setTaskName(taskName)}/>
                    </div>
                    <div className={'form-group mt-2'}>
                        <label>Task description</label>
                        <textarea rows={5} className={'form-control'} value={description}
                                  onChange={e => e.target.value.length < 160 ? setDescription(e.target.value) : setDescription(description)}/>
                    </div>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;