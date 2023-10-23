import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Button } from '@mui/base/Button';
import { Input as BaseInput, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import { red, gray, transition, borderRadius } from '../../assets/js/customStyles'
import { LocationOn } from '@mui/icons-material';

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

export default function LocationField() {
  return (
    <Box>
      <Input
        id="outlined-adornment-location"
        placeholder="Current location(San Francisco)"
        endAdornment={
          <InputAdornment>
            <IconButton>
              <LocationOn />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}

const InputRoot = styled('div')(
  ({ theme }) => `
  width: 92.5%;
	font-size: 16px;
	background: #F3F4F4;
	font-weight: 400;
	line-height: 1.5;
	color: ${gray[500]};
	border-radius: ${borderRadius[1]};
	padding: 4px 12px;
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
  margin: 8px;
  display: inline-flex;
  align-items: center;
`;
