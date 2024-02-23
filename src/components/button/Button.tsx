import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

type ButtonPropsType = {
	title: string;
	onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonPropsType) {
	const onClickHandler = () => {
		props.onClick();
	};

	return (
		<button className={styles.btn} {...props} onClick={onClickHandler}>
			{props.title}
		</button>
	);
}

export default Button;
