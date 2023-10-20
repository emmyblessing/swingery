import * as React from 'react';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import {
	red,
	gray,
	borderRadius,
	transition,
} from '../../assets/js/customStyles'

const Input = React.forwardRef(function CustomInput(props, ref) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default function FormInputField({ placeholder, name, ...props }) {
  return <>
		<Input placeholder={placeholder} name={name}	{...props} />
	</>
}

const InputElement = styled('input')(
	({ theme }) => `
	width: 295px;
	font-size: 16px;
	background: white;
	font-weight: 400;
	line-height: 1.5;
	color: ${gray[500]};
	border: 1px solid ${gray[500]};
	border-radius: ${borderRadius[2]};
	padding: 12px 12px;
	transition: ${transition};

  &:hover {
    background: ${red[100]}
    outline: 1px solid ${red[300]}
  }

  &:focus {
    border-color: ${red[300]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

