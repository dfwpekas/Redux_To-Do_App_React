import { useSelector, useDispatch} from 'react-redux';
import Task from './Task';
import { filterTasks } from './tasksSlice';

const ListTask = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const filter = useSelector((state) => state.tasks.filter);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'done') return task.isDone;
        if (filter === 'not') return !task.isDone;
        return true;
    });


    return (
        <div>
            <div>
                <button onClick={() => dispatch(filterTasks('all'))} className='filter-button'>All</button>
                <button onClick={() => dispatch(filterTasks('done'))} className='filter-button'>Done</button>
                <button onClick={() => dispatch(filterTasks('not'))} className='filter-button'>Not Done</button>
            </div>
            <ul className='task-list'>
                {filteredTasks.map((task) => ( <li>
                    <Task key={task.id} task={task} />
                </li>))}
            </ul>
        </div>
    )

}

export default ListTask;