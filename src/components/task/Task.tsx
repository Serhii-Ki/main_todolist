import Button from '../button/Button';
import EditSpan from '../editSpan/EditSpan';

import styles from './task.module.css';

type TaskPropsType = {
	title: string;
	taskId: string;
	isDone: boolean;
	deleteTask: (taskId: string) => void;
	onChangeChecked: (taskId: string) => void;
};
function Task(props: TaskPropsType) {
	const deleteTask = () => {
		props.deleteTask(props.taskId);
	};

	const onChangeChecked = () => {
		props.onChangeChecked(props.taskId);
	};
	return (
		<li className={styles.listElem}>
			<input
				type='checkbox'
				checked={props.isDone}
				onChange={onChangeChecked}
			/>
			<EditSpan title={props.title} />
			<Button title='X' onClick={deleteTask} />
		</li>
	);
}

export default Task;
