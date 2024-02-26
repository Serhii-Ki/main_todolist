import cn from 'classnames';
import { ChangeEvent, useState } from 'react';

import Button from '../button/Button';
import Input from '../input/Input';
import styles from './editSpan.module.css';

type EditSpanPropsType = {
	title: string;
	isEdit: boolean;
	isDone?: boolean;
	editItem: (title: string) => void;
	onEditHandler: () => void;
};

function EditSpan(props: EditSpanPropsType) {
	const [inputValue, setInputValue] = useState<string>(props.title);

	const toggleEditView = () => {
		props.onEditHandler && props.onEditHandler();
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
	};

	const onBlurHandler = () => {
		toggleEditView();
	};

	const editTask = () => {
		if (inputValue.trim()) {
			props.editItem(inputValue);
			toggleEditView();
		} else {
			return;
		}
	};

	const cancelEdit = () => {
		toggleEditView();
		setInputValue(props.title);
	};

	return (
		<>
			{!props.isEdit ? (
				<span
					className={cn({
						[styles.done]: props.isDone,
					})}
					onDoubleClick={toggleEditView}
				>
					{props.title}
				</span>
			) : (
				<>
					<Input
						autoFocus={true}
						value={inputValue}
						onChange={onChangeHandler}
					/>
					<Button title='change' onClick={editTask} />
					<Button title='cancel' onClick={cancelEdit} />
				</>
			)}
		</>
	);
}

export default EditSpan;
