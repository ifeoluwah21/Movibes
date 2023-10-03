import BenefitContent from '../components/createUser/BenefitContent';
import CreateUser from '../components/createUser/CreateUser';

import styles from './AuthPage.module.scss';

const AuthPage = () => {
	return (
		<section className={styles.layout}>
			<BenefitContent />
			<CreateUser />
		</section>
	);
};

export default AuthPage;
