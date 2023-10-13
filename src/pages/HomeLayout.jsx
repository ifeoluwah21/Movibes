// import React from 'react'

import styles from './HomeLayout.module.scss';

import { Outlet } from 'react-router-dom';
import Nav from '../components/Navigation/Nav';
import Search from '../components/Search/Search';

const HomeLayout = () => {
	return (
		<div className={styles.layout}>
			<Nav />
			<div>
				<Search />
				<Outlet />
			</div>
		</div>
	);
};

export default HomeLayout;
