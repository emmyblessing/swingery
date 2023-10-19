import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import { green, red } from '../../assets/js/customStyles'

const FormCheckField = (props) => {
	return (
		<div>
			<FormControlLabel
				sx={{
					marginTop: '20px',
					'& .MuiFormControlLabel-label': { fontSize: 13, color: green[600] },
				}}
				control={
					<Checkbox
						sx={{
							'& .MuiSvgIcon-root': {
								fontSize: 38,
								color: props.isinvalid ? red[500] : green[500],
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
