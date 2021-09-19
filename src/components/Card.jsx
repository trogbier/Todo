import React, {useState} from 'react';
import EditTask from "../modals/EditTask";

const Card = ({name, description, index, deleteHandler, id, updateTask}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);


    const colors = [{primaryColor: "#5D93E1", secondaryColor: "#ECF3FC"},
        {primaryColor: "#F9D288", secondaryColor: "#FEFAF1"},
        {primaryColor: "#5DC250", secondaryColor: "#F2FAF1"},
        {primaryColor: "#F48687", secondaryColor: "#FDF1F1"},
        {primaryColor: "#B964F7", secondaryColor: "#F3F0FD"}]

    const deleteHandlerTask = () => {
        deleteHandler(id)
    }

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{backgroundColor: colors[index % 5].primaryColor}}/>
            <div className="task-holder">
                <span className="card-header"
                      style={{backgroundColor: colors[index % 5].secondaryColor, borderRadius: 10}}>{name}</span>
                <p className="mt-2 p_class">{description}</p>
                <div style={{position: "absolute", right: 20, bottom: 20}}>
                    <i className="far fa-edit" onClick={toggle}
                       style={{color: colors[index % 5].primaryColor, marginRight: 8, cursor: 'pointer'}}/>
                    <i className="fas fa-trash-alt" style={{color: colors[index % 5].primaryColor, cursor: 'pointer'}}
                       onClick={deleteHandlerTask}/>
                </div>
            </div>
            <EditTask isOpen={isOpen} toggle={toggle} updateTask={updateTask} id={id} name={name} descriptionDes={description}/>
        </div>
    );
};

export default Card;