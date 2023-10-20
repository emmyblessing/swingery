import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Box, Link } from '@mui/material'
import { styled } from '@mui/system'
import { black } from '../../assets/js/customStyles'

const StyledLinkBlack = styled(Link)`
	color: ${black};
	text-decoration: none;
	cursor: pointer;

	$:hover {
		text-decoration: none;
		color: ${black};
	}
`
const BackIcon = ({ navigation }) => {
	return (
		<div>
			<Box sx={{ padding: '20px' }}>
				<StyledLinkBlack href={navigation}>
					<ArrowBackIosNewIcon />
				</StyledLinkBlack>
			</Box>
		</div>
	)
}

export default BackIcon
