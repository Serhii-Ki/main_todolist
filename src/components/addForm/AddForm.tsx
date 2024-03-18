import { ChangeEvent, useState } from 'react';
import CustomBtn from '../customBtn/CustomBtn';
import Input from '../input/Input';

import styles from './addForm.module.css';

type AddFormPropsType = {
	buttonTitle: string;
	addItem: (inputValue: string) => void;
};

function AddForm(props: AddFormPropsType) {
	const [inputValue, setInputValue] = useState<string>('');
	const [isErrorAddTask, setErrorAddTask] = useState<boolean>(false);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
		setErrorAddTask(false);
	};

	const onClickHandler = () => {
		if (inputValue.trim()) {
			props.addItem(inputValue);
			setInputValue('');
		} else {
			setErrorAddTask(true);
			return;
		}
	};

	return (
		<>
			<div className={styles.wrapper}>
				<Input
					value={inputValue}
					onChange={onChangeHandler}
					isError={isErrorAddTask}
				/>
				<CustomBtn title={props.buttonTitle} onClick={onClickHandler} />
			</div>
			{isErrorAddTask && <p className={styles['error-text']}>Error!!!</p>}
		</>
	);
}

export default AddForm;
