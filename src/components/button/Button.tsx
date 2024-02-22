type ButtonPropsType = {
	title: string;
	onClick: () => void;
};

function Button(props: ButtonPropsType) {
	const onClickHandler = () => {
		props.onClick();
	};

	return <button onClick={onClickHandler}>{props.title}</button>;
}

export default Button;
