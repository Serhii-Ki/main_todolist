import generateUniqueId from 'generate-unique-id';
import { useState } from 'react';
import TodoList from '../../components/todoList/TodoList';

import AddForm from '../../components/addForm/AddForm';
import styles from './main.module.css';

export type TodoListType = {
	id: string;
	title: string;
	filter: string;
	tasks: TasksType[];
};

export type TasksType = {
	id: string;
	title: string;
	isDone: boolean;
};

function MainApp() {
	const todoListsVar: TodoListType[] = [
		{
			id: generateUniqueId(),
			title: 'What to learn',
			filter: 'all',
			tasks: [
				{
					id: generateUniqueId(),
					title: 'HTML',
					isDone: false,
				},
				{
					id: generateUniqueId(),
					title: 'CSS',
					isDone: false,
				},
				{
					id: generateUniqueId(),
					title: 'JavaScript',
					isDone: false,
				},
				{
					id: generateUniqueId(),
					title: 'React',
					isDone: true,
				},
				{
					id: generateUniqueId(),
					title: 'Typescript',
					isDone: true,
				},
			],
		},
		{
			id: generateUniqueId(),
			title: 'What to buy',
			filter: 'all',
			tasks: [
				{
					id: generateUniqueId(),
					title: 'Banana',
					isDone: false,
				},
				{
					id: generateUniqueId(),
					title: 'Milk',
					isDone: true,
				},
				{
					id: generateUniqueId(),
					title: 'Beer',
					isDone: false,
				},
			],
		},
	];

	const [todoLists, setTodoLists] = useState<TodoListType[]>(todoListsVar);

	const addTask = (id: string, title: string) => {
		const newTask: TasksType = {
			id: generateUniqueId(),
			title: title,
			isDone: false,
		};
		setTodoLists(
			todoLists.map(el =>
				el.id === id ? { ...el, tasks: [...el.tasks, newTask] } : el
			)
		);
	};

	const addTodoList = (title: string) => {
		const newTodoList: TodoListType = {
			id: generateUniqueId(),
			title: title,
			filter: 'all',
			tasks: [],
		};
		setTodoLists([...todoLists, newTodoList]);
	};

	const deleteTask = (taskId: string) => {
		setTodoLists(todoLists.filter(el => el.id !== taskId));
	};

	const deleteTodoList = (todoListId: string) => {
		setTodoLists(prevState => prevState.filter(list => list.id !== todoListId));
	};

	const onChangeChecked = (todoListId: string, taskId: string) => {
		setTodoLists(
			todoLists.map(el =>
				el.id === todoListId
					? {
							...el,
							tasks: el.tasks.map(el =>
								el.id === taskId ? { ...el, isDone: !el.isDone } : el
							),
					  }
					: el
			)
		);
	};

	const onChangeFilter = (todoListId: string, newFilter: string) => {
		setTodoLists(
			todoLists.map(list =>
				list.id === todoListId ? { ...list, filter: newFilter } : list
			)
		);
	};

	const editTodoList = (title: string, todoListId: string) => {
		const newTitleTodoList = todoLists.map(list =>
			list.id === todoListId ? { ...list, title: title } : list
		);
		setTodoLists([...newTitleTodoList]);
	};

	const editTask = (title: string, todoListId: string, taskId: string) => {
		setTodoLists(
			todoLists.map(el =>
				el.id === todoListId
					? {
							...el,
							tasks: el.tasks.map(el =>
								el.id === taskId ? { ...el, title: title } : el
							),
					  }
					: el
			)
		);
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
							tasks={item.tasks}
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
