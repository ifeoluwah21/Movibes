// import React from 'react';
import styles from './NavDesc.module.scss';

const NavDesc = () => {
	return (
		<article className={styles.card}>
			<h3 className={styles['card--title']}>
				Play movie quizes and earn free tickets
			</h3>
			<p className={styles['card--content']}>50k people are playing now</p>
			<button
				className={styles['card--btn']}
				type="button">
				Starting Playing
			</button>
		</article>
	);
};

export default NavDesc;
