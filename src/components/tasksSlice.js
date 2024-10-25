import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    filter: 'all' // 'done' or 'not'
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        editTask: (state, action) => {
            const { id, description } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.description = description
            }
        },
        toggleTaskStatus: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        filterTasks: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export const { addTask, editTask, toggleTaskStatus, filterTasks } = tasksSlice.actions;
export default tasksSlice.reducer;