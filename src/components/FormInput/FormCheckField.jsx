import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { gray, red } from '../../assets/js/customStyles'

const FormCheckField = (props) => {
	return (
		<div>
			<FormControlLabel
				sx={{
					marginTop: '20px',
					'& .MuiFormControlLabel-label': { fontSize: 13, color: red[600] },
				}}
				control={
					<Checkbox
						sx={{
							'& .MuiSvgIcon-root': {
								fontSize: 38,
								color: props.isinvalid ? gray[500] : red[500],
							},
						}}
					/>
				}
				{...props}
			/>
		</div>
	)
}

export default FormCheckField
