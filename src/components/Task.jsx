import { useDispatch } from "react-redux";
import { toggleTaskStatus, editTask } from "./tasksSlice";
import { useState } from "react";

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(task.description);

    const handleEdit = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            dispatch(editTask({ id: task.id, description }));
        }
    };

    return (
        <li className={`task-item ${task.isDone ? 'completed' : ''}`}>
            <input 
                type="checkbox"
                checked={task.isDone}
                onChange={() => dispatch(toggleTaskStatus(task.id))}
            />

            {isEditing ? (
                <input 
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            ) : (
                <span className="task-text">{task.description}</span>
            )}

            <button onClick={handleEdit} className="edit-button"> {isEditing ? 'Save' : 'Edit'} </button>
        </li>
    )
}

export default Task;