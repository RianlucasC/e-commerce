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
    <section className='flex justify-center py-4'>
      <div className='w-full max-w-7xl'>
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
            <div className='flex justify-center'>
              <img src={Banner1} alt="Black friday, descontos de até 80%" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex justify-center'>
              <img src={Banner2} alt="Frete gráris para todo o Brasil!" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex justify-center'>
              <img src={Banner3} alt="20% OFF" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}


export default Slider;