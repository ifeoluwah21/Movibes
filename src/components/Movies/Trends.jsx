import Movie from './Movie';
import styles from './Trends.module.scss';

const Trends = () => {
	return (
		<section className={styles.container}>
			<div className={styles['container--title']}>
				<h3>Trending</h3>
				<span>see all</span>
			</div>
			<div className={styles['movie-con']}>
				<Movie />
				<Movie />
				<Movie />
				<Movie />
			</div>
		</section>
	);
};

export default Trends;
