import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const ImagesSlider = ({ setImageMain, images }) => {
  return (
    <div className="w-full">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        navigation={true}
                        freeMode={true}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {images.map((val, indice) => {
                            if (indice !== 0) return <SwiperSlide key={indice} className="cursor-pointer">
                                <img src={val} alt="product image" className="w-20 h-20 rounded-md bg-contain" onClick={({target}) => setImageMain(target.src)}/>
                            </SwiperSlide> 
                        })
                        }
                    </Swiper>
                </div>
  )
}

export default ImagesSlider