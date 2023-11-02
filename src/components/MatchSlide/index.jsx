import React from 'react'
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './swiperMatch.css';
import MatchOne from '../../assets/img/Rectangle 17.png';
import MatchTwo from '../../assets/img/Rectangle 16.png';
import MatchThree from '../../assets/img/Rectangle 18.png';
import MatchFour from '../../assets/img/Rectangle 18.png';
import IconLayer from '../IconLayer';
import { Link } from '@mui/material';

const MatchSlide = () => {
  return (
    <div>
      <Box sx={{
        width: '100%',
        position: 'relative',
      }}>
        <Swiper
          /* effect={'cards'} */
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
        <SwiperSlide className="mySwiper-slide">
          <div className='relative'>
            <Link href="/matchDetails">
              <img src={MatchOne} alt='Match One'/>
            </Link>
            <div className='flex justify-center'>
              <div className='absolute bg-[#9F0000] text-center top-[-10px] text-sm px-5 rounded-b-3xl'>
                <p className='font-bold mb-[4px]'>70% Match</p>
              </div>
            </div>
            <div className='absolute top-52 text-white font-bold'>
              <div className='px-4'>
                <h3 className='leading-none'>Sara Willaims <br /> 
                  <span className='text-sm'>Califonia, USA ( 54 km )</span>
                </h3>
              </div>
              <div className='mt-2 flex justify-center'>
                <IconLayer />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <div className='relative'>
            <Link href="/matchDetails">
              <img src={MatchTwo} alt='Match Two'/>
            </Link>
            <div className='flex justify-center'>
              <div className='absolute bg-[#9F0000] text-center top-[-10px] text-sm px-5 rounded-b-3xl'>
                <p className='font-bold mb-[4px]'>70% Match</p>
              </div>
            </div>
            <div className='absolute top-52 text-white font-bold'>
              <div className='px-4'>
                <h3 className='leading-none'>Grace Williams <br /> 
                  <span className='text-sm'>Califonia, USA ( 54 km )</span>
                </h3>
              </div>
              <div className='mt-2 flex justify-center'>
                <IconLayer />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <div className='relative'>
            <Link href="/matchDetails">
              <img src={MatchThree} alt='Match Three'/>
            </Link>
            <div className='flex justify-center'>
              <div className='absolute bg-[#9F0000] text-center top-[-10px] text-sm px-5 rounded-b-3xl'>
                <p className='font-bold mb-[4px]'>70% Match</p>
              </div>
            </div>
            <div className='absolute top-52 text-white font-bold'>
              <div className='px-4'>
                <h3 className='leading-none'>Peter James <br /> 
                  <span className='text-sm'>Califonia, USA ( 54 km )</span>
                </h3>
              </div>
              <div className='mt-2 flex justify-center'>
                <IconLayer />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <div className='relative'>
            <Link href="/matchDetails">
              <img src={MatchFour} alt='Match Four'/>
            </Link>
            <div className='flex justify-center'>
              <div className='absolute bg-[#9F0000] text-center top-[-10px] text-sm px-5 rounded-b-3xl'>
                <p className='font-bold mb-[4px]'>70% Match</p>
              </div>
            </div>
            <div className='absolute top-52 text-white font-bold'>
              <div className='px-4'>
                <h3 className='leading-none'>Sara John <br /> 
                  <span className='text-sm'>Califonia, USA ( 54 km )</span>
                </h3>
              </div>
              <div className='mt-2 flex justify-center'>
                <IconLayer />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <div className='relative'>
            <Link href="/matchDetails">
              <img src={MatchTwo} alt='Match Two'/>
            </Link>
            <div className='flex justify-center'>
              <div className='absolute bg-[#9F0000] text-center top-[-10px] text-sm px-5 rounded-b-3xl'>
                <p className='font-bold mb-[4px]'>70% Match</p>
              </div>
            </div>
            <div className='absolute top-52 text-white font-bold'>
              <div className='px-4'>
                <h3 className='leading-none'>Grace Williams <br /> 
                  <span className='text-sm'>Califonia, USA ( 54 km )</span>
                </h3>
              </div>
              <div className='mt-2 flex justify-center'>
                <IconLayer />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <div className='relative'>
            <Link href="/matchDetails">
              <img src={MatchThree} alt='Match Three'/>
            </Link>
            <div className='flex justify-center'>
              <div className='absolute bg-[#9F0000] text-center top-[-10px] text-sm px-5 rounded-b-3xl'>
                <p className='font-bold mb-[4px]'>70% Match</p>
              </div>
            </div>
            <div className='absolute top-52 text-white font-bold'>
              <div className='px-4'>
                <h3 className='leading-none'>Peter James <br /> 
                  <span className='text-sm'>Califonia, USA ( 54 km )</span>
                </h3>
              </div>
              <div className='mt-2 flex justify-center'>
                <IconLayer />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <div className='relative'>
            <Link href="/matchDetails">
              <img src={MatchFour} alt='Match Four'/>
            </Link>
            <div className='flex justify-center'>
              <div className='absolute bg-[#9F0000] text-center top-[-10px] text-sm px-5 rounded-b-3xl'>
                <p className='font-bold mb-[4px]'>70% Match</p>
              </div>
            </div>
            <div className='absolute top-52 text-white font-bold'>
              <div className='px-4'>
                <h3 className='leading-none'>Sara John <br /> 
                  <span className='text-sm'>Califonia, USA ( 54 km )</span>
                </h3>
              </div>
              <div className='mt-2 flex justify-center'>
                <IconLayer />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <div className='relative'>
            <Link href="/matchDetails">
              <img src={MatchOne} alt='Match One'/>
            </Link>
            <div className='flex justify-center'>
              <div className='absolute bg-[#9F0000] text-center top-[-10px] text-sm px-5 rounded-b-3xl'>
                <p className='font-bold mb-[4px]'>70% Match</p>
              </div>
            </div>
            <div className='absolute top-52 text-white font-bold'>
              <div className='px-4'>
                <h3 className='leading-none'>Sara Willaims <br /> 
                  <span className='text-sm'>Califonia, USA ( 54 km )</span>
                </h3>
              </div>
              <div className='mt-2 flex justify-center'>
                <IconLayer />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <div className='relative'>
            <Link href="/matchDetails">
              <img src={MatchTwo} alt='Match Two'/>
            </Link>
            <div className='flex justify-center'>
              <div className='absolute bg-[#9F0000] text-center top-[-10px] text-sm px-5 rounded-b-3xl'>
                <p className='font-bold mb-[4px]'>70% Match</p>
              </div>
            </div>
            <div className='absolute top-52 text-white font-bold'>
              <div className='px-4'>
                <h3 className='leading-none'>Grace Williams <br /> 
                  <span className='text-sm'>Califonia, USA ( 54 km )</span>
                </h3>
              </div>
              <div className='mt-2 flex justify-center'>
                <IconLayer />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </Box>
    </div>
  )
}

export default MatchSlide;