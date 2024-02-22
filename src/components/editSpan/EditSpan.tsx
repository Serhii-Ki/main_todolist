import { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';

type EditSpanPropsType = {
	title: string;
};

type ShowElemType = 'span' | 'input';

function EditSpan(props: EditSpanPropsType) {
	const [viewElem, setViewElem] = useState<ShowElemType>('span');

	const showInput = () => {
		setViewElem('input');
	};

	const showSpan = () => {
		setViewElem('span');
	};

	const onChangeHandler = () => {
		console.log('change');
	};

	const editTask = () => {
		console.log('edittask');
	};

	return (
		<>
			{viewElem === 'span' ? (
				<span onDoubleClick={showInput}>{props.title}</span>
			) : (
				<>
					<Input
						autoFocus={true}
						onBlur={showSpan}
						text={''}
						onChange={onChangeHandler}
					/>
					<Button title='change' onClick={editTask} />
				</>
			)}
		</>
	);
}

export default EditSpan;
