import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './input.module.css';

type InputPropsType = {
	placeholder?: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputPropsType) {
	return (
		<input
			className={styles.inputMain}
			{...props}
			value={props.value}
			onChange={props.onChange}
		/>
	);
}

export default Input;
