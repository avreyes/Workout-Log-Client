import { Modal } from 'bootstrap';
import React, { useState } from 'react';
import { FormGroup, ModalBody, ModalHeader } from 'reactstrap';


const WorkoutEdit = (props) => {
    const [editDesc, setEditDesc] = useState(props.workoutToUpdate.description);
    const [editDef, setEditDef] = useState(props.workoutToUpdate.definition);
    const [editRes, setEditRes] = useState(props.workoutToUpdate.result);

    return (
        <Modal isOpen={true}>
            <ModalHeader> Log a Workout </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label htmlFor='result'>Edit Result:</Label>
                        <Input name='result' value={ editRes } onChange={(e) => setEditRes(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description'>Edit Description:</Label>
                        <Input name='description' value={ editDesc } onChange={(e) => setEditDesc(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='definition'>Edit Definition:</Label>
                        <Input name='definition' value={ editDef } onChange={(e) => setEditDef(e.target.value)}>
                            
                        </Input>

                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default WorkoutEdit;