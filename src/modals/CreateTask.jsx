import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap';

const CreateTask = ({modal, toggle}) => {
    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <Form>
                    d
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;