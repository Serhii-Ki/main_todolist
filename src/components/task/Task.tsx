import Button from '../button/Button';
import EditSpan from '../editSpan/EditSpan';
type TaskPropsType = {
	title: string;
	deleteTask: () => void;
};
function Task(props: TaskPropsType) {
	const deleteTask = () => {
		props.deleteTask();
	};
	return (
		<li>
			<input type='checkbox' />
			<EditSpan title={props.title} />
			<Button title='X' onClick={deleteTask} />
		</li>
	);
}

export default Task;
