import React from 'react'
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from '@mui/material';
import 'swiper/css';
import './swiper.css';
import AvatarOne from '../../assets/img/AvatarOne.png';
import AvatarTwo from '../../assets/img/AvatarTwo.png';

const Stories = () => {
  return (
    <div>
      <Box sx={{
        width: '100%',
        position: 'relative',
      }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div>
              <ul >
                <li className="flex flex-col items-center">
                  <div className="relative rounded-full p-0.5">
                    <Link href="/" className="bg-white p-0.5 rounded-full block transform transition hover:rotate-6">
                      <img src={AvatarOne} className="rounded-full" width="70" alt="Story One"/>
                    </Link>
                    <button className="absolute bg-red-700 text-white text-xl font-medium w-7 h-7 rounded-full  bottom-0 right-0.5 border-2 border-white flex justify-center items-center font-mono hover:bg-red-900 focus:outline-none">
                      <div className="transform -translate-y-px font-bold">+</div>
                    </button>
                  </div>
                  <span className="text-sm text-center w-16 mt-2 overflow-hidden overflow-ellipsis">My Story</span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <ul>
                <li className="flex flex-col items-center">
                  <div className="rounded-full bg-red-700 p-0.5">
                    <Link href="/" className="bg-white p-0.5 rounded-full block transform transition hover:rotate-6">
                      <img src={AvatarTwo} className="rounded-full" width="70" alt='StoryOne'/>
                    </Link>
                  </div>
                    <span className="text-sm text-center w-16 mt-2 overflow-hidden overflow-ellipsis">Selena</span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <ul>
                <li className="flex flex-col items-center">
                  <div className="rounded-full bg-red-700 p-0.5">
                  <Link href="/" className="bg-white p-0.5 rounded-full block transform transition hover:rotate-6">
                    <img src="https://i.imgur.com/eMaYwXn.jpg" className="rounded-full" width="70" alt='Story Two' />
                  </Link>
                  </div>
                  <span className="text-sm text-center w-16 mt-2 overflow-hidden overflow-ellipsis">Clara</span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto">
              <ul>
                <li className="flex flex-col items-center">
                  <div className="rounded-full bg-red-700 p-0.5">
                  <Link href="/" className="bg-white p-0.5 rounded-full block transform transition hover:rotate-6">
                    <img src="https://i.imgur.com/zQZSWrt.jpg" className="rounded-full" width="70" alt='Story Three'/>
                  </Link>
                  </div>
                    <span className="text-sm text-center w-16 mt-2 overflow-hidden overflow-ellipsis">Fabian</span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto">
              <ul>
                <li className="flex flex-col items-center">
                  <div className="rounded-full bg-red-700 p-0.5">
                  <Link href="/dashboard" className="bg-white p-0.5 rounded-full block transform transition hover:rotate-6">
                    <img src="https://i.imgur.com/uIgDDDd.jpg" className="rounded-full" width="70" alt="Story Five"/>
                  </Link>
                  </div>
                    <span className="text-sm text-center w-16 mt-2 overflow-hidden overflow-ellipsis">Fabian</span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto">
              <ul>
                <li className="flex flex-col items-center">
                  <div className="rounded-full bg-red-700 p-0.5">
                  <Link href="/dashboard" className="bg-white p-0.5 rounded-full block transform transition hover:rotate-6">
                    <img src="https://i.imgur.com/tT8rjKC.jpg" className="rounded-full" width="70" alt="Story Six"/>
                  </Link>
                  </div>
                    <span className="text-sm text-center w-16 mt-2 overflow-hidden overflow-ellipsis">Fabian</span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto">
              <ul>
                <li className="flex flex-col items-center">
                  <div className="rounded-full bg-red-700 p-0.5">
                  <Link href="/" className="bg-white p-0.5 rounded-full block transform transition hover:rotate-6">
                    <img src="https://i.imgur.com/aq39RMA.jpg" className="rounded-full" width="70" alt='StoryOne'/>
                  </Link>
                  </div>
                    <span className="text-sm text-center w-16 mt-2 overflow-hidden overflow-ellipsis">Fabian</span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  )
}

export default Stories;