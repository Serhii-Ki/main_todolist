import cn from 'classnames';
import { ChangeEvent, InputHTMLAttributes } from 'react';

import styles from './input.module.css';

type InputPropsType = {
	placeholder?: string;
	value: string;
	isError?: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputPropsType) {
	return (
		<input
			className={cn(styles.inputMain, {
				[styles.error]: props.isError,
			})}
			{...props}
			value={props.value}
			onChange={props.onChange}
		/>
	);
}

export default Input;
