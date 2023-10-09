import { register } from 'swiper/element/bundle';
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



register();

const Slider = () => {
  return (
    <section className='w-full text-center py-4'>
      <Swiper 
        pagination={true} 
        navigation={true} 
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }} 
        loop={true} className="mySwiper" 
      >

        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <img src={Banner1} alt="Black friday, descontos de até 80%" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <img src={Banner2} alt="Frete gráris para todo o Brasil!" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <img src={Banner3} alt="20% OFF" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}


export default Slider;