import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { useButton } from '@mui/base/useButton';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material'
import { borderRadius, red } from '../../assets/js/customStyles'

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { children, disabled } = props;
  const { active, focusVisible, getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
};

export default function Button({label, size, type, ...props}) {
  return (
    <Stack spacing={2} direction="row">
      <Box sx={{ 
        width: size,
      }}>
        <CustomButton type={type} {...props} onClick={() => console.log('click!')}>{label}</CustomButton>
      </Box>
      
    </Stack>
  );
}

const CustomButtonRoot = styled('button')`
  font-family: 'DM Sans'
  font-weight: bold;
  font-size: 16px;
  background-color: ${red[500]};
  padding: 16px 0;
  border-radius: ${borderRadius[2]};
  width: 100%;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  margin-top: 18px;

  &:hover {
    background-color: ${red[700]};
  }

  &.active {
    background-color: ${red[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
