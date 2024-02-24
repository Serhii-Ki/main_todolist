import { ChangeEvent, useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';

import styles from './addForm.module.css';

type AddFormPropsType = {
	buttonTitle: string;
	addItem: (inputValue: string) => void;
};

function AddForm(props: AddFormPropsType) {
	const [inputValue, setInputValue] = useState<string>('');

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
	};

	const onClickHandler = () => {
		if (inputValue.trim()) {
			props.addItem(inputValue);
			setInputValue('');
		} else {
			return;
		}
	};

	return (
		<div className={styles.wrapper}>
			<Input value={inputValue} onChange={onChangeHandler} />
			<Button title={props.buttonTitle} onClick={onClickHandler} />
		</div>
	);
}

export default AddForm;
