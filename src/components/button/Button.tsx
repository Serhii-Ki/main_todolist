import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

type ButtonPropsType = {
	title: string;
	isActive?: boolean;
	onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonPropsType) {
	const onClickHandler = () => {
		props.onClick();
	};

	return (
		<button
			className={cn(styles.btn, {
				[styles.active]: props.isActive,
			})}
			{...props}
			onClick={onClickHandler}
		>
			{props.title}
		</button>
	);
}

export default Button;
