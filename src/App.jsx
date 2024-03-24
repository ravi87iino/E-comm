import React, {useState} from 'react';
import {IoMdSearch} from "react-icons/io";
import {Menu, Transition} from '@headlessui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {SlArrowDown} from "react-icons/sl";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination, EffectCoverflow} from "swiper/modules";

import slide_image_1 from './ph_source/ph-1.png';
import slide_image_2 from './ph_source/ph-2.png';
import slide_image_3 from './ph_source/main.png';
import slide_image_4 from './ph_source/ph-4.png';
import slide_image_5 from './ph_source/ph-3.png';
function MyComponent() {
    const hslColor = "hsl(240,3.7%,15.88%)";

    const [showDropdown, setShowDropdown] = useState(false);
    const [query, setQuery] = useState('');
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <> < nav className = "bg-gray-800" > <div
            className="flex gap-5 px-16 py-9 bg-zinc-800 max-md:flex-wrap max-md:px-5 relative">
            <div
                className="flex gap-1.5 justify-end self-start py-2.5 text-3xl font-extrabold leading-5 text-white whitespace-nowrap">
                <img loading="lazy" src="https://bit.ly/3TQU8LS"/>
                <div className="flex-auto text-4xl">E-COMM</div>
            </div>
            <div
                className="flex flex-auto gap-5 items-center text-base font-bold text-white max-md:flex-wrap relative">
                <div className="self-stretch my-auto text-xl">
                    <a href="#">HOME</a>
                </div>
                <div className="self-stretch my-auto text-xl">
                    <a href="#">ELECTRONICS</a>
                </div>
                <div className="self-stretch my-auto text-xl">
                    <a href="#">BOOKS</a>
                </div>
                <div className="self-stretch my-auto text-xl">
                    <a href="#">MUSICS</a>
                </div>
                <div className="self-stretch my-auto text-xl">
                    <a href="#">MOVIES</a>
                </div>
                <div className="self-stretch my-auto text-xl">
                    <a href="#">CLOTHINGS</a>
                </div>
                <div className="self-stretch my-auto text-xl">
                    <a href="#">GAMES</a>
                </div>

                {/* Dropdown Button */}
                <div className="self-stretch my-auto">
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button
                                id="dropdownNavbarLink"
                                data-dropdown-toggle="dropdownNavbar"
                                className="text-gray-100 text-xl hover:bg-gray-600 flex items-center"
                                onClick={toggleDropdown}>
                                MORE
                                <p className='text-gray-800'>
                                    .</p>
                                <em>
                                    <SlArrowDown/></em>

                            </Menu.Button>
                        </div>
                        <Transition leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {
                                        ({active}) => (
                                            <a
                                                href="#"
                                                className="bg-black hover:bg-gray-100 hover:text-black block px-4 py-2">Dashboard</a>

                                        )
                                    }
                                </Menu.Item>
                                <Menu.Item>
                                    {
                                        ({active}) => (
                                            <a
                                                href="#"
                                                className="bg-black hover:bg-gray-100 hover:text-black block px-4 py-2">Settings</a>

                                        )
                                    }
                                </Menu.Item>
                                <Menu.Item>
                                    {
                                        ({active}) => (
                                            <a
                                                href="#"
                                                className="bg-black hover:bg-gray-100 hover:text-black block px-4 py-2">Earnings</a>

                                        )
                                    }
                                </Menu.Item>
                                <Menu.Item>
                                    {
                                        ({active}) => (
                                            <a
                                                href="#"
                                                className="bg-black  hover:bg-gray-100 hover:text-black block px-4 py-2">Sign out</a>

                                        )
                                    }
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>

                <div className="flex items-center bg-gray-800 text-gray-400">
                    <IoMdSearch className="text-gray-100 ml-3"/>
                    <input
                        className="bg-gray-800 text-white placeholder-gray-100 p-2 w-full"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search something..."/>
                </div>
            </div>
        </div> </nav> 

{/ * feature product * /}
<div style={{ backgroundColor: hslColor }} className="flex flex-col text-stone-100 p-10 ">
      <div className="self-center text-6xl font-extrabold leading-10 max-md:max-w-full max-md:text-4xl">
        Featured Products
      </div > <div className="mt-8 w-full text-2xl leading-8 text-center max-md:max-w-full">
            Explore and discover a variety of products
        </div>
    </div>

            {/* sliding card */
        } < div > <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container">
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image"/>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    </div>

</>
    );
}

export default MyComponent;
