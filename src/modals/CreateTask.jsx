import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap';

const CreateTask = ({isOpen, toggle, save}) => {
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')

    const handleSave = () => {
        const task = {name: taskName, description}
        save(task)
        toggle()
        setTaskName('')
        setDescription('')
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <Form>
                    <div className={'form-group'}>
                        <label>Task name</label>
                        <input type="text" className={'form-control'} value={taskName}
                               onChange={e => setTaskName(e.target.value)}/>
                    </div>
                    <div className={'form-group mt-2'}>
                        <label>Task description</label>
                        <textarea rows={5} className={'form-control'} value={description}
                                  onChange={e => setDescription(e.target.value)}/>
                    </div>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => handleSave()}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;