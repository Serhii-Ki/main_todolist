import { ChangeEvent, useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';

type EditSpanPropsType = {
	title: string;
	isEdit: boolean;
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
			props.editItem && props.editItem(inputValue);
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
				<span onDoubleClick={toggleEditView}>{props.title}</span>
			) : (
				<>
					<Input
						autoFocus={true}
						// onBlur={onBlurHandler}
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
