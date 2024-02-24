import { ChangeEvent, useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';

type EditSpanPropsType = {
	title: string;
	editItem?: (title: string) => void;
};

type ShowElemType = 'span' | 'input';

function EditSpan(props: EditSpanPropsType) {
	const [viewElem, setViewElem] = useState<ShowElemType>('span');
	const [inputValue, setInputValue] = useState<string>('');

	const showInput = () => {
		setViewElem('input');
	};

	const showSpan = () => {
		setViewElem('span');
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
	};

	const editTask = () => {
		props.editItem && props.editItem(inputValue);
		showSpan();
	};

	return (
		<>
			{viewElem === 'span' ? (
				<span onDoubleClick={showInput}>{props.title}</span>
			) : (
				<>
					<Input
						autoFocus={true}
						// onBlur={showSpan}
						value={inputValue}
						onChange={onChangeHandler}
					/>
					<Button title='change' onClick={editTask} />
				</>
			)}
		</>
	);
}

export default EditSpan;
