import { TasksType } from '../../pages/mainApp/MainApp';
import AddForm from '../addForm/AddForm';
import Button from '../button/Button';
import EditSpan from '../editSpan/EditSpan';
import Task from '../task/Task';

type TodoListProps = {
	title: string;
	filter: string;
	tasks: TasksType[];
	deleteTask: () => void;
};

function TodoList(props: TodoListProps) {
	const deleteTask = () => {
		props.deleteTask();
	};

	const changeFilter = () => {
		console.log('filter');
	};

	const changeTextInput = () => {
		console.log();
	};

	const addTask = () => {
		console.log('addTask');
	};

	return (
		<div>
			<EditSpan title={props.title} />
			<AddForm
				buttonTitle='add'
				inputText='?'
				onChange={changeTextInput}
				addTask={addTask}
			/>
			<Button title='all' onClick={changeFilter} />
			<Button title='active' onClick={changeFilter} />
			<Button title='completed' onClick={changeFilter} />
			<ul>
				{props.tasks.map(task => {
					return (
						<Task key={task.id} title={task.title} deleteTask={deleteTask} />
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;
