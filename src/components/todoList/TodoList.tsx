import { useState } from 'react';
import {TasksType} from "../../state/tasks-reducer";
import AddForm from '../addForm/AddForm';
import CustomBtn from '../customBtn/CustomBtn';
import EditSpan from '../editSpan/EditSpan';
import Task from '../task/Task';

import styles from './todoList.module.css';
import {FilterType} from "../../state/todos-reducer";


type TodoListProps = {
	title: string;
	filter: string;
	tasks: TasksType;
	todoListId: string;
	addTask: (id: string, title: string) => void;
	onChangeChecked: (todoListId: string, taskId: string) => void;
	onChangeFilter: (todoListId: string, newFilter: FilterType) => void;
	deleteTask: (todoListId: string, taskId: string) => void;
	deleteTodoList: (todoListId: string) => void;
	editTodoList: (title: string, todoListId: string) => void;
	editTask: (title: string, todoListId: string, taskId: string) => void;
};

function TodoList(props: TodoListProps) {
	const [isEdit, setEdit] = useState(false);

	const renderTaskElem = () => {
		if(props.filter === 'completed') {
			return props.tasks[props.todoListId].filter(task => task.isDone)
		}

		if(props.filter === 'active') {
			return props.tasks[props.todoListId].filter(task => !task.isDone)
		}

		return props.tasks[props.todoListId];
	};

	const addTask = (inputValue: string) => {
		props.addTask(props.todoListId, inputValue);
	};

	const deleteTask = (taskId: string) => {
		props.deleteTask(props.todoListId, taskId);
	};

	const deleteTodoList = () => {
		props.deleteTodoList(props.todoListId);
	};

	const onChangeChecked = (taskId: string) => {
		props.onChangeChecked(props.todoListId, taskId);
	};

	const changeFilter = (filter: FilterType) => {
		props.onChangeFilter(props.todoListId, filter);
	};

	const onEditHandler = () => {
		setEdit(prevState => !prevState);
	};

	const editTodoList = (title: string) => {
		props.editTodoList(title, props.todoListId);
	};

	const editTask = (title: string, taskId: string) => {
		props.editTask(title, props.todoListId, taskId);
	};

	return (
		<div>
			<EditSpan
				title={props.title}
				isEdit={isEdit}
				onEditHandler={onEditHandler}
				editItem={editTodoList}
			/>
			{!isEdit && <CustomBtn title='Х' onClick={deleteTodoList} />}
			<AddForm buttonTitle='add' addItem={addTask} />
			<div className={styles.btnWrapper}>
				<CustomBtn
					title='all'
					variant='contained'
					onClick={() => changeFilter('all')}
				/>
				<CustomBtn
					title='active'
					variant='contained'
					onClick={() => changeFilter('active')}
				/>
				<CustomBtn
					title='completed'
					variant='contained'
					onClick={() => changeFilter('completed')}
				/>
			</div>
			<ul>
				{renderTaskElem().map(task => {
					return (
						<Task
							key={task.id}
							taskId={task.id}
							title={task.title}
							isDone={task.isDone}
							deleteTask={deleteTask}
							onChangeChecked={onChangeChecked}
							editTask={editTask}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;
