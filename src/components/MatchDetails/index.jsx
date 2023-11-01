import React from 'react'
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperMatchDetails.css';
import UnlockImage from '../../assets/img/Rectangle 177.png';
import UnlockImageBlur from '../../assets/img/Rectangle 306.png';
import { Pagination } from 'swiper/modules';
import { Link } from '@mui/material';
import IconLayer from '../IconLayer';

const More = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="20" transform="rotate(90 20 20)" fill="#E5E5E5" fill-opacity="0.56"/>
    <path d="M20 13C20 13.5523 20.4477 14 21 14C21.5523 14 22 13.5523 22 13C22 12.4477 21.5523 12 21 12C20.4477 12 20 12.4477 20 13Z" stroke="black" stroke-opacity="0.2" stroke-width="2"/>
    <path d="M20 20.0002C20 20.5525 20.4477 21.0002 21 21.0002C21.5523 21.0002 22 20.5525 22 20.0002C22 19.448 21.5523 19.0002 21 19.0002C20.4477 19.0002 20 19.448 20 20.0002Z" stroke="black" stroke-opacity="0.2" stroke-width="2"/>
    <path d="M20 27C20 27.5523 20.4477 28 21 28C21.5523 28 22 27.5523 22 27C22 26.4477 21.5523 26 21 26C20.4477 26 20 26.4477 20 27Z" stroke="black" stroke-opacity="0.2" stroke-width="2"/>
  </svg>
);

const Lock = (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path d="M29.7984 2.02881C20.3006 2.02881 12.6159 9.70271 12.6159 19.1858V27.6562H18.4277V19.5592C18.4277 13.2712 23.5219 8.17014 29.7984 8.17014C36.0754 8.17014 41.1694 13.4136 41.1694 19.5591V27.6562H46.9812V19.1859C46.9812 9.94494 39.28 2.02881 29.7986 2.02881H29.7984ZM9.97934 29.8462C8.26723 32.5212 7.30231 35.6057 7.30231 38.8438C7.30231 49.1983 17.2597 57.7696 29.7988 57.7696C42.3376 57.7696 52.295 49.1983 52.295 38.8438C52.295 35.6054 51.3271 32.5216 49.6144 29.8462H9.9791H9.97934ZM29.7656 32.6513C32.3836 32.6513 34.5557 34.7537 34.5557 37.3716C34.5557 39.3352 33.3135 41.0314 31.6113 41.7516L35.4457 53.2508H24.1516L27.9163 41.7517C26.214 41.0316 25.0414 39.3353 25.0414 37.372C25.0414 34.7542 27.1475 32.6517 29.7655 32.6517L29.7656 32.6513Z" fill="white"/>
  </svg>
)

const Unlock = (
  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56" viewBox="0 0 46 56" fill="none">
    <path d="M40.1797 17.289C40.1797 8.04053 32.4805 0.124512 23 0.124512C13.4961 0.124512 5.82031 7.79912 5.82031 17.289V25.7616H11.6328V17.664C11.6328 11.371 16.7188 6.26631 23 6.26631C29.2695 6.26631 34.3672 11.1483 34.3672 17.289H40.1797ZM3.18359 27.953C1.46094 30.6249 0.5 33.7069 0.5 36.953C0.5 47.3007 10.4609 55.8788 23 55.8788C35.5391 55.8788 45.5 47.3007 45.5 36.953C45.5 33.7069 44.5273 30.6249 42.8164 27.953H3.18359ZM22.9648 30.7538C25.5781 30.7538 27.7578 32.8632 27.7578 35.4765C27.7578 37.4452 26.5156 39.1327 24.8164 39.8476L28.6484 51.3554H17.3516L21.1133 39.8476C19.4141 39.1327 18.2422 37.4335 18.2422 35.4765C18.2422 32.8632 20.3516 30.7538 22.9648 30.7538Z" fill="white"/>
  </svg>
)

const Chat = (
  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
    <circle cx="29" cy="29" r="29" fill="white" fill-opacity="0.8"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 21.3C18 20.4248 18.3477 19.5854 18.9665 18.9665C19.5854 18.3477 20.4248 18 21.3 18H32.3C33.1752 18 34.0146 18.3477 34.6335 18.9665C35.2523 19.5854 35.6 20.4248 35.6 21.3V27.9C35.6 28.7752 35.2523 29.6146 34.6335 30.2335C34.0146 30.8523 33.1752 31.2 32.3 31.2H28.3554L24.2777 35.2777C24.1239 35.4315 23.9279 35.5362 23.7145 35.5786C23.5012 35.6211 23.28 35.5993 23.0791 35.516C22.8781 35.4328 22.7063 35.2919 22.5855 35.111C22.4646 34.9302 22.4 34.7175 22.4 34.5V31.2H21.3C20.4248 31.2 19.5854 30.8523 18.9665 30.2335C18.3477 29.6146 18 28.7752 18 27.9V21.3ZM40 25.7V32.3C40 33.4 39.34 35.6 36.7 35.6H35.6V38.9C35.6 39.2663 35.38 40 34.5 40C34.2767 40 34.0952 39.9527 33.95 39.8757L29.6743 35.6H25.7L29 32.3H32.3C33.7663 32.3 36.7 31.42 36.7 27.9V22.4C37.8 22.4 40 23.06 40 25.7Z" fill="#9F0000"/>
  </svg>
)

const MatchDetailsPage = () => {
  return (
    <div>
      <Box sx={{
        width: '100%',
        position: 'relative',
      }}>
        <Swiper
          pagination={true} 
          modules={[Pagination]}
          className="mySwiper2"
        >
          <SwiperSlide className="mySwiper-slide2">
            <div className='relative'>
              <div className='flex justify-center'>
                <img src={UnlockImageBlur} alt='Match One' />
                <div className='absolute top-52 text-white font-bold'>
                  <div className='px-4'>
                    <div className='text-center'>
                      {Lock}
                    </div>
                    <p className='text-center text-base'> 
                      This image is locked message <br />
                      the owner to get unlock  pin
                    </p>
                  </div>
                </div>
                <div className='absolute bottom-2 ml-72'>
                  {Chat}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiper-slide2">
            <div className='relative'>
              <div className='flex justify-center'>
                <img src={UnlockImageBlur} alt='Match One' />
                <div className='absolute top-52 text-white font-bold'>
                  <div className='px-4'>
                    <div className='text-center'>
                      {Lock}
                    </div>
                    <div className='mt-4 flex items-center'>
                      <input
                        type="password"
                        id="password"
                        className="mt-1 mr-2 w-full px-2 py-3 rounded-lg border-none shadow-sm sm:text-sm"
                      />
                      <button className='bg-white text-sm rounded-lg border-none outline-none px-3 py-0 h-9 hover:bg-[#9F0000] hover:text-yellow-400 focus:bg-[#9F0000] focus:text-yellow-400'>
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-2 ml-72'>
                  {Chat}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiper-slide2">
            <div className='relative'>
              <div className='flex justify-center'>
                <img src={UnlockImageBlur} alt='Match One' />
                <div className='absolute top-52 text-white font-bold'>
                  <div className='px-4'>
                    <div className='text-center'>
                      {Unlock}
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-2 ml-72'>
                  {Chat}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiper-slide2">
            <div className='relative'>
              <div className='flex justify-center'>
                <img src={UnlockImage} alt='Match One' />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box>
        <div className='flex justify-center'>
          <div className='bg-[#9B139D] text-center mt-[-13px] text-sm px-5 rounded-b-3xl'>
            <p className='font-bold mb-[4px] text-white'>70% Match</p>
          </div>
        </div>
        <div className='flex mt-3 px-4'>
          <div className='mr-10'>
            <h3 className='leading-none text-[29px]'>Sara Willaims (27) <br /> 
              <span className='text-sm text-gray-400'>Califonia, USA ( 54 km )</span>
            </h3>
          </div>
          <div className='pt-6'>
            <Link href="/matchDetails">
              {More}
            </Link>
          </div>
        </div>
        <div className='px-4'>
          <div className='mt-[-10px]'>
            <h3 className='leading-none text-[22px]'>About</h3>
            <p className='text-lg leading-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,etium maecenas sed urna lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <Link href="/matchDetails" sx={{
            textDecoration: 'none', 
            color: '#9F0000', 
            fontSize: '18px', 
            fontWeight: 'bold'
          }}> Show more </Link>
          <div className='mt-9'>
            <h3 className='leading-none text-[22px]'>Basic Information</h3>
            <div>
              <p className='mt-0 leading-none'>
                <span className='font-bold text-gray-700'>Looking for:</span> Male
              </p>
              <p className='mt-0 leading-none'>
                <span className='font-bold text-gray-700'>Gender:</span> Female
              </p>
              <p className='mt-0 leading-none'>
                <span className='font-bold text-gray-700'>Age:</span> 27 Years old
              </p>
            </div>
          </div>
        </div>
        <div className='mt-8 py-4 bg-[#9f0000] text-center'>
          <IconLayer />
        </div>
      </Box>      
    </div>
  )
}

export default MatchDetailsPage;
