// import React from 'react';
import styles from './BenefitContent.module.scss';
const BenefitContent = () => {
	return (
		<article className={styles.content}>
			<h1 className={styles[`content--title`]}>
				Benefits of your free IMDb account
			</h1>
			<article>
				<h2 className={styles[`content--subtitle`]}>
					Personalized Recommendations{' '}
				</h2>
				<p className={styles[`content--text`]}>
					Discover shows you&apos;ll love.
				</p>
			</article>
			<article>
				<h2 className={styles[`content--subtitle`]}>Your Ratings</h2>
				<p className={styles[`content--text`]}>
					Rate and remember everything you&apos;ve seen.
				</p>
			</article>
			<article>
				<h2 className={styles[`content--subtitle`]}>Contribute to IMDb</h2>
				<p className={styles[`content--text`]}>
					Add data that will be seen by millions of people and get cool badges.
				</p>
			</article>
		</article>
	);
};

export default BenefitContent;
