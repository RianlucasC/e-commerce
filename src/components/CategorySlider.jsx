import CategoryCard from './CategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const cards = [
  {
    title: 'Processors',
    img: 'https://m.media-amazon.com/images/I/51D+aC--oXL._AC_SY300_SX300_.jpg'
  },
  {
    title: 'Mainboard',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71OzO9TtYiL._AC_UL100_SR100,100_.jpg'
  },
  {
    title: 'Memory',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61p32NOogaL._AC_UL100_SR100,100_.jpg'
  },
  {
    title: 'Consoles',
    img: 'https://images-na.ssl-images-amazon.com/images/I/41dxVVHRNWL._AC_UL100_SR100,100_.jpg'
  },
  {
    title: 'Accessories',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61WUcZDwc+L._AC_UL100_SR100,100_.jpg'
  },
  {
    title: 'Games',
    img: 'https://images-na.ssl-images-amazon.com/images/I/711eymrSAML._AC_UL100_SR100,100_.jpg'
  },
  {
    title: 'Smartphones',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71sC9nMz6EL._AC_UL100_SR100,100_.jpg'
  },
]

const CategorySlider = ({ setCategory }) => {
  return (
    <div className='bg-[#EBEEF1] pl-4 pb-4'>
        <p className='mb-4 font-bold'>Categorias</p>

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        breakpoints={{
            '@0.00': {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            '@0.75': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            '@1.75': {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            '@2.00': {
                slidesPerView: 7,
                spaceBetween: 50,
              },
          }}
        className="mySwiper"
      >
        {cards.map(({title, img}) => <SwiperSlide key={title}>
          <div>
            <CategoryCard setCategory={setCategory} title={title} img={img}/>
          </div>
          </SwiperSlide>)
        }
        
      </Swiper>
    </div>
  )
}

export default CategorySlider