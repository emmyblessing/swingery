import React from 'react'
import { Box, Link, Typography } from '@mui/material';
import Button from '../Button';
import FormInputField from '../FormInput/FormInputField';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import SwingerySmall from '../../assets/img/Swingery-Logo-Small.png';
import Football from '../../assets/img/football.png';
import Language from '../../assets/img/language.png';
import Nature from '../../assets/img/nature.png';
import Photography from '../../assets/img/photography.png';
import Writing from '../../assets/img/writing.png';


const InterestPage = () => {
  return (
    <div>
      <Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					textAlign: 'center',
				}}>
        <Box mt={2}>
          <img src={ SwingerySmall } alt='Swingery logo' />
        </Box>
      </Box>
      <Box mt={2}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box mt={2} sx={{marginLeft: '-120px'}}>
            <Typography variant='p' fontSize={22} fontWeight="bold" color="#263238">
            Pick your interests...
            </Typography>
          </Box>
          <Box mt={2}>
            <FormInputField name="email" placeholder="Seach" type="text"/>
          </Box>

          <Box mt={1} sx={{marginLeft: '-50px'}}>
            <Typography variant='p' fontSize={16} color="#263238">
              You should select at least 5 interests
            </Typography>
          </Box>
          
          <Box
            mt={3}
            mb={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Football" src={Football} />}
                  label="Football"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
              
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Nature" src={Nature} />}
                  label="Nature"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
              
              <Box>
                <Chip
                  avatar={<Avatar alt="Language" src={Language} />}
                  label="Language"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
            </Box>

            <Box mt={2} sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Photography" src={Photography} />}
                  label="Photography"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
              
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Writing" src={Writing} />}
                  label="Writing"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
              
              <Box>
                <Chip
                  avatar={<Avatar alt="Writing" src={Writing} />}
                  label="Writing"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
            </Box>
            
            <Box mt={2} sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Football" src={Football} />}
                  label="Football"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
              
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Nature" src={Nature} />}
                  label="Nature"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
              
              <Box>
                <Chip
                  avatar={<Avatar alt="Language" src={Language} />}
                  label="Language"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
            </Box>
            <Box mt={2} sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Photography" src={Photography} />}
                  label="Photography"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
              
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Writing" src={Writing} />}
                  label="Writing"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
              
              <Box>
                <Chip
                  avatar={<Avatar alt="Writing" src={Writing} />}
                  label="Writing"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
            </Box>

            <Box mt={2} sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Football" src={Football} />}
                  label="Football"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
              
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Language" src={Nature} />}
                  label="Nature"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
              
              <Box>
                <Chip
                  avatar={<Avatar alt="Language" src={Language} />}
                  label="Language"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
            </Box>
            
            <Box mt={2} sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Photography" src={Photography} />}
                  label="Photography"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
              
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Writing" src={Writing} />}
                  label="Writing"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
              
              <Box>
                <Chip
                  avatar={<Avatar alt="Writing" src={Writing} />}
                  label="Writing"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 0',
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            mt={2}
            mb={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link href="/gender">
              <Button size="320px" label="Next" />
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default InterestPage;
