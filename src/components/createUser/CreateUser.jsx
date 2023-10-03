import Form from './Form';
import styles from './CreateUser.module.scss';

const CreateUser = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles['section--title']}>Create an account </h2>
			<span className={styles['section--text']}>
				Let&#39;s get started with your 30 days free trial.
			</span>
			<Form />
		</section>
	);
};

export default CreateUser;
