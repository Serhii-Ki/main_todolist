import { ChangeEvent, InputHTMLAttributes } from 'react';

type InputPropsType = {
	placeholder?: string;
	text: string;
	onChange: (text: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputPropsType) {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange(e.currentTarget.value);
	};
	return <input {...props} value={props.text} onChange={onChangeHandler} />;
}

export default Input;
