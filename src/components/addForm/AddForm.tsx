import Button from '../button/Button';
import Input from '../input/Input';

type AddFormPropsType = {
	inputText: string;
	buttonTitle: string;
	onChange: () => void;
	addTask: () => void;
};

function AddForm(props: AddFormPropsType) {
	const onChangeHandler = () => {
		props.onChange();
	};

	const onClickHandler = () => {
		props.addTask();
	};

	return (
		<div>
			<Input text={props.inputText} onChange={onChangeHandler} />
			<Button title={props.buttonTitle} onClick={onClickHandler} />
		</div>
	);
}

export default AddForm;
