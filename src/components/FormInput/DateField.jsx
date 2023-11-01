import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Button } from '@mui/base/Button';
import { Input as BaseInput, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import { red, gray, transition} from '../../assets/js/customStyles'

const DateIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
    <path d="M14.5091 11.0833V4.66667H0.165527V11.0833C0.165527 11.8569 0.480359 12.5987 1.04076 13.1457C1.60117 13.6927 2.36124 14 3.15377 14H11.5208C12.3134 14 13.0734 13.6927 13.6339 13.1457C14.1943 12.5987 14.5091 11.8569 14.5091 11.0833ZM4.94313 7.28933C4.94313 7.52093 4.84887 7.74305 4.68108 7.90681C4.5133 8.07058 4.28573 8.16258 4.04845 8.16258C3.81116 8.16258 3.5836 8.07058 3.41581 7.90681C3.24803 7.74305 3.15377 7.52093 3.15377 7.28933C3.15377 7.05773 3.24803 6.83562 3.41581 6.67185C3.5836 6.50809 3.81116 6.41608 4.04845 6.41608C4.28573 6.41608 4.5133 6.50809 4.68108 6.67185C4.84887 6.83562 4.94313 7.05773 4.94313 7.28933ZM4.94313 10.206C4.94313 10.4376 4.84887 10.6597 4.68108 10.8235C4.5133 10.9872 4.28573 11.0792 4.04845 11.0792C3.81116 11.0792 3.5836 10.9872 3.41581 10.8235C3.24803 10.6597 3.15377 10.4376 3.15377 10.206C3.15377 9.9744 3.24803 9.75229 3.41581 9.58852C3.5836 9.42475 3.81116 9.33275 4.04845 9.33275C4.28573 9.33275 4.5133 9.42475 4.68108 9.58852C4.84887 9.75229 4.94313 9.9744 4.94313 10.206ZM8.23258 7.28933C8.23258 7.52093 8.13832 7.74305 7.97054 7.90681C7.80275 8.07058 7.57519 8.16258 7.3379 8.16258C7.10062 8.16258 6.87305 8.07058 6.70527 7.90681C6.53749 7.74305 6.44322 7.52093 6.44322 7.28933C6.44322 7.05773 6.53749 6.83562 6.70527 6.67185C6.87305 6.50809 7.10062 6.41608 7.3379 6.41608C7.57519 6.41608 7.80275 6.50809 7.97054 6.67185C8.13832 6.83562 8.23258 7.05773 8.23258 7.28933ZM8.23258 10.206C8.23258 10.4376 8.13832 10.6597 7.97054 10.8235C7.80275 10.9872 7.57519 11.0792 7.3379 11.0792C7.10062 11.0792 6.87305 10.9872 6.70527 10.8235C6.53749 10.6597 6.44322 10.4376 6.44322 10.206C6.44322 9.9744 6.53749 9.75229 6.70527 9.58852C6.87305 9.42475 7.10062 9.33275 7.3379 9.33275C7.57519 9.33275 7.80275 9.42475 7.97054 9.58852C8.13832 9.75229 8.23258 9.9744 8.23258 10.206ZM11.5173 7.28933C11.5173 7.52093 11.423 7.74305 11.2552 7.90681C11.0874 8.07058 10.8599 8.16258 10.6226 8.16258C10.3853 8.16258 10.1577 8.07058 9.98995 7.90681C9.82216 7.74305 9.7279 7.52093 9.7279 7.28933C9.7279 7.05773 9.82216 6.83562 9.98995 6.67185C10.1577 6.50809 10.3853 6.41608 10.6226 6.41608C10.8599 6.41608 11.0874 6.50809 11.2552 6.67185C11.423 6.83562 11.5173 7.05773 11.5173 7.28933ZM14.5091 2.91667C14.5091 2.14312 14.1943 1.40125 13.6339 0.854272C13.0734 0.307291 12.3134 0 11.5208 0H3.15377C2.36124 0 1.60117 0.307291 1.04076 0.854272C0.480359 1.40125 0.165527 2.14312 0.165527 2.91667V3.5H14.5091V2.91667Z" fill="#C4C4C4"/>
  </svg>
)

const Input = React.forwardRef(function CustomInput(props, ref) {
  const { slots, ...other } = props;
  return (
    <BaseInput
      slots={{
        root: InputRoot,
        input: InputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

Input.propTypes = {
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType,
    textarea: PropTypes.elementType,
  }),
};

export default function DateField() {
  return (
    <Box>
      <Input
        type="text"
        id="outlined-adornment-date"
        placeholder="Birth Day"
        endAdornment={
          <InputAdornment>
            <IconButton>
              { DateIcon }
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}

const InputRoot = styled('div')(
  ({ theme }) => `
  width: 295px;
	font-size: 16px;
	background: #ffffff;
	font-weight: 400;
	line-height: 1.5;
	color: ${gray[500]};
	border-radius: 8px;
  border: 1px solid ${gray[500]};
	padding: 8px 12px;
	transition: ${transition};
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid ${red[500]};
    background: ${red[100]}
    border-color: ${red[300]};
  }

  &.${inputClasses.focused} {
    border-color: ${red[300]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const InputElement = styled('input')(
  ({ theme }) => `
  font-size: 16px;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: ${gray[500]}
  background: inherit;
  border: none;
  border-radius: inherit;
  outline: 0;
`,
);

const IconButton = styled(Button)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: ${gray[500]};
  textAlign: right;
  `,
);

const InputAdornment = styled('div')`
  display: inline-flex;
  align-items: center;
`;
