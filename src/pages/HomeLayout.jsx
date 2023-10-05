// import React from 'react'

import Nav from '../components/Navigation/Nav';

const HomeLayout = () => {
	return (
		<div>
			{/* <nav className={styles.nav}>
				<div className={styles.logo}>
					<img
						src={logo}
						alt="Movibes"
					/>
				</div>
				<ul className={styles[`nav--list`]}>
					<li className={styles[`nav--item`]}>
						<NavLink
							to="/"
							className={({ isActive }) =>
								!isActive
									? styles['nav--link']
									: `${styles['nav--link']} ${styles['nav--link__active']}`
							}>
							Home
						</NavLink>
					</li>
					<li className={styles[`nav--item`]}>
						<NavLink
							to={'/movies'}
							className={({ isActive }) =>
								!isActive
									? styles['nav--link']
									: `${styles['nav--link']} ${styles['nav--link__active']}`
							}>
							Movies
						</NavLink>
					</li>
					<li className={styles[`nav--item`]}>
						<NavLink
							to={'/series'}
							className={({ isActive }) =>
								!isActive
									? styles['nav--link']
									: `${styles['nav--link']} ${styles['nav--link__active']}`
							}>
							TV series
						</NavLink>
					</li>
					<li className={styles[`nav--item`]}>
						<NavLink
							to={'/upcoming'}
							className={({ isActive }) =>
								!isActive
									? styles['nav--link']
									: `${styles['nav--link']} ${styles['nav--link__active']}`
							}>
							Upcoming
						</NavLink>
					</li>
				</ul>
				<NavDesc />
				<span className={styles[`nav--item`]}>
					<NavLink className={styles['nav--link']}>Upcoming</NavLink>
				</span>
			</nav> */}
			<Nav />
		</div>
	);
};

export default HomeLayout;
