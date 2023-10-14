import Movie from './Movie';
import styles from './Trends.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';

const Trends = () => {
	return (
		<section className={styles.container}>
			<div className={styles['container--title']}>
				<h3>Trending</h3>
				<span>see all</span>
			</div>
			{/* <div className={styles['movie-con']}>
				<Movie />
				<Movie />
				<Movie />
				<Movie />
			</div> */}

			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={16}
				slidesPerView={3}
				navigation
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}>
				<SwiperSlide
					style={{
						flex: '0 0 12.5rem',
						width: '12.5rem',
					}}>
					<Movie />
				</SwiperSlide>
				<SwiperSlide
					style={{
						flex: '0 0 12.5rem',
						width: '12.5rem',
					}}>
					<Movie />
				</SwiperSlide>
				<SwiperSlide
					style={{
						flex: '0 0 12.5rem',
						width: '12.5rem',
					}}>
					<Movie />
				</SwiperSlide>
				<SwiperSlide
					style={{
						flex: '0 0 12.5rem',
						width: '12.5rem',
					}}>
					<Movie />
				</SwiperSlide>
				...
			</Swiper>
		</section>
	);
};

export default Trends;
