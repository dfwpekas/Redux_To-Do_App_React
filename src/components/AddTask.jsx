import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./tasksSlice";

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (description.trim()) {
            dispatch(addTask({
                id: Date.now(),
                description,
                isDone: false
            }));
            setDescription('');
        }
    }


    return (
        <div className="add-task">
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="task-input"
            />
            <button onClick={handleAddTask}className="add-task-button">Add Task</button>
        </div>
    )
}

export default AddTask;