import { useState } from 'react';
import CustomBtn from '../customBtn/CustomBtn';
import EditSpan from '../editSpan/EditSpan';
import {Paper} from "@mui/material";

import styles from './task.module.css';

type TaskPropsType = {
	title: string;
	taskId: string;
	isDone: boolean;
	deleteTask: (taskId: string) => void;
	onChangeChecked: (taskId: string) => void;
	editTask: (title: string, taskId: string) => void;
};
function Task(props: TaskPropsType) {
	const [isEdit, setEdit] = useState(false);
	const deleteTask = () => {
		console.log('delete');
		props.deleteTask(props.taskId);
	};

	const onChangeChecked = () => {
		props.onChangeChecked(props.taskId);
	};

	const editTask = (title: string) => {
		props.editTask(title, props.taskId);
	};

	const onEditHandler = () => {
		setEdit(prevState => !prevState);
	};
	return (
				<li className={styles.listElem}>
					{!isEdit && <input
							type='checkbox'
							checked={props.isDone}
							onChange={onChangeChecked}
					/>}
					<EditSpan
							title={props.title}
							editItem={editTask}
							isEdit={isEdit}
							isDone={props.isDone}
							onEditHandler={onEditHandler}
					/>
					{!isEdit && <CustomBtn title='X' onClick={deleteTask}/>}
				</li>
	);
}

export default Task;
