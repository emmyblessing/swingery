import './pinfield.scss'
import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Link, Typography } from '@mui/material'
import BackIcon from '../../components/Back'
import PinField from 'react-pin-field'
import MailBox from '../../assets/img/mailbox.png'


const VerifyPage = () => {
	// eslint-disable-next-line no-unused-vars
	const [pinValue, setPinValue] = useState('');
	const pinLength = 4

	return (
		<div>
			<Box sx={{ display: 'flex', }}>
				<BackIcon navigation="/register" />
			</Box>
			<Box
				mt={1}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				
				<img src={MailBox} alt='Mail Box' />

				<Typography
					variant='p'
					sx={{
						fontFamily: 'DM Sans',
						paddingTop: '50px',
						fontWeight: 500,
						fontSize: '24px',
						lineHeight: '25px',
						textAlign: 'center',
					}}>
					Verifiy Mobile Number
				</Typography>
				<Typography
					variant='p'
					sx={{
						fontFamily: 'DM Sans',
						paddingTop: '10px',
						fontSize: '16px',
						lineHeight: '25px',
						textAlign: 'center',
						color: '#3B3237',
					}}>
					Enter verification code that sent to <br />
					<b>+1 123 456 7890</b> by SMS
				</Typography>
				<Box mt={6} sx={{ width: '327px' }}>
					<form autoComplete='on'>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
							}}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}>
								<PinField
									className='pin-field'
									type='password'
									onChange={(e) => setPinValue(e)}
									validate='0123456789'
									inputMode='numeric'
									length={pinLength}
								/>
							</Box>
						</Box>
					</form>
				</Box>
				<Typography
					variant='p'
					sx={{
						fontFamily: 'DM Sans',
						paddingTop: '15px',
						fontSize: '16px',
						lineHeight: '25px',
						color: '#666666',
					}}>
					Enter 4 digit code
				</Typography>
				<Box mt={10}>
					<Link
					sx={{
						fontFamily: 'DM Sans',
						textDecoration: 'none',
						fontSize: '18px',
						color: '#9F0000',
					}}>
						Resend Code (0:30s)
					</Link>
					<Link
					href="/interest"
					sx={{
						fontFamily: 'DM Sans',
						textDecoration: 'none',
						fontSize: '18px',
						color: '#9F0000',
					}}>
						Next
					</Link>
				</Box>
			</Box>
		</div>
	)
}

export default VerifyPage;
