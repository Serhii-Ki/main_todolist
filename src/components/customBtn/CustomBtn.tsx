import { Button, ButtonProps } from '@mui/material';

export type BtnPropsType = {
	title: string;
	color?: string;
	onClick: () => void;
} & ButtonProps;

function CustomBtn(props: BtnPropsType) {
	const onClickHandler = () => {
		props.onClick();
	};

	return (
			<Button
					{...props}
					onClick={onClickHandler}
					color={props.color || 'primary'}
			>
				{props.title}
			</Button>
	);
}

export default CustomBtn;
