import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap';

const EditTask = ({isOpen, toggle, updateTask, id, name, descriptionDes}) => {
    const [taskName, setTaskName] = useState(name)
    const [description, setDescription] = useState(descriptionDes)

    const handleChange = () => {
        if (taskName && description) {
            const task = {name: taskName, description, id: id}
            updateTask(task)
        } else {
            alert('Введите данные')
        }
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Change Task</ModalHeader>
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
                <Button color="primary" onClick={handleChange}>Change</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;