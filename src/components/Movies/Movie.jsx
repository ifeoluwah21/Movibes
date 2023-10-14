import styles from './Movie.module.scss';
import img from '../../assets/movie-thumb.webp';
import imgStar from '../../assets/star.webp';

const Movie = () => {
	return (
		<div className={styles.container}>
			<img
				src={img}
				alt="Movie"
				width={200}
				height={310}
				className={styles['container--img']}
			/>
			<div className={styles.rating}>
				<img
					src={imgStar}
					alt="rating"
					width={20}
					height={20}
					className={`${styles['rating--icon']}`}
				/>
				<span className={`${styles['rating--value']}`}>8.8</span>
			</div>
		</div>
	);
};

export default Movie;
