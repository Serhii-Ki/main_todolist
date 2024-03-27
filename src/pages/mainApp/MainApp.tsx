import {useReducer} from 'react';
import TodoList from '../../components/todoList/TodoList';
import AddForm from '../../components/addForm/AddForm';
import {FilterType, initialTodoList, todoListsReducer} from "../../state/todos-reducer";
import {initialTasks, tasksReducer} from "../../state/tasks-reducer";
import {addTodoListAC, changeFilterAC, editTodoAC, removeTodoList} from "../../state/actions-todos";
import {
	addTaskAC,
	changeCheckedAC,
	editTaskAC,
	removeTaskAC,
	updateTasksAC
} from "../../state/actions-tasks";
import generateUniqueId from "generate-unique-id";

import styles from './main.module.css';

function MainApp() {
	const [todoLists, dispatchTodos] = useReducer(todoListsReducer, initialTodoList);
	const [tasks, dispatchTask] = useReducer(tasksReducer, initialTasks);

	const deleteTodoList = (todoListId: string) => {
		dispatchTodos(removeTodoList(todoListId));
	};

	const deleteTask = (todoListId: string, taskId: string) => {
		dispatchTask(removeTaskAC(todoListId, taskId));
	};

	const addTodoList = (title: string) => {
		const newTodoId = generateUniqueId();

		dispatchTodos(addTodoListAC(newTodoId, title));
		dispatchTask(updateTasksAC(newTodoId));
	};

	const addTask = (id: string, title: string) => {
		dispatchTask(addTaskAC(id, title));
	};


	const onChangeChecked = (todoListId: string, taskId: string) => {
		dispatchTask(changeCheckedAC(todoListId, taskId));
	};

	const onChangeFilter = (todoListId: string, newFilter: FilterType) => {
		dispatchTodos(changeFilterAC(todoListId, newFilter));
	};

	const editTodoList = (title: string, todoListId: string) => {
		dispatchTodos(editTodoAC(todoListId, title));
	};

	const editTask = (title: string, todoListId: string, taskId: string) => {
		dispatchTask(editTaskAC(todoListId, taskId, title));
	};

	return (
		<>
			<div className={styles.addList}>
				<h3>Add new todoList</h3>
				<AddForm buttonTitle='add' addItem={addTodoList} />
			</div>
			<div className={styles.wrapper}>
				{todoLists.map(item => {
					return (
						<TodoList
							key={item.id}
							title={item.title}
							filter={item.filter}
							tasks={tasks}
							todoListId={item.id}
							deleteTask={deleteTask}
							addTask={addTask}
							onChangeChecked={onChangeChecked}
							onChangeFilter={onChangeFilter}
							deleteTodoList={deleteTodoList}
							editTodoList={editTodoList}
							editTask={editTask}
						/>
					);
				})}
			</div>
		</>
	);
}

export default MainApp;
