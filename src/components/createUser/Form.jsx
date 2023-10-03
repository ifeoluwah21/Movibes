import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Form.module.scss';

const validateSchema = Yup.object({
	name: Yup.string()
		.min(0, 'Name cannot be blank')
		.required('Name can not be blank'),
	email: Yup.string()
		.email('Invalid Email!')
		.required('Email can not be blank'),
	password: Yup.string()
		.min(6, 'Password must be more than 6 characters')
		.required('Password can not be blank'),
});

const UserForm = () => {
	const handleSubmit = (value, { setSubmitting, resetForm }) => {
		console.log(value),
			setSubmitting(false),
			resetForm({ name: '', password: '', email: '' });
	};
	return (
		<>
			<Formik
				onSubmit={handleSubmit}
				initialValues={{ name: '', email: '', password: '' }}
				validationSchema={validateSchema}>
				{(helperProps) => (
					<Form className={styles.form}>
						{console.log(helperProps)}
						<label
							className={styles['form--label']}
							htmlFor="name">
							<span>Name</span>
							<ErrorMessage
								name="name"
								className={styles['form--error']}
								component={'p'}
							/>
							<Field
								name="name"
								type="text"
								placeholder="Name"
							/>
						</label>
						<label
							className={styles['form--label']}
							htmlFor="email">
							<span>Email</span>
							<ErrorMessage
								className={styles['form--error']}
								name="email"
								component={'p'}
							/>
							<Field
								name="email"
								type="email"
								placeholder="Email"
							/>
						</label>
						<label
							className={styles['form--label']}
							htmlFor="password">
							<ErrorMessage
								name="password"
								component={'p'}
								className={styles['form--error']}
							/>
							<span>Password</span>
							<Field
								name="password"
								type="password"
								placeholder="Password"
							/>
						</label>
						<button
							disabled={helperProps.isSubmitting}
							type="submit"
							className={`${styles['form--btn']} ${styles['form--submit']}`}>
							Create account
						</button>
						<button
							disabled={helperProps.isSubmitting}
							className={`${styles['form--btn']}  ${styles['form--google']}`}
							type="button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0 0 48 48">
								<path
									fill="#FFC107"
									d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
								<path
									fill="#FF3D00"
									d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
								<path
									fill="#4CAF50"
									d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
								<path
									fill="#1976D2"
									d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
							</svg>
							Sign up with Google
						</button>
						<p className={styles['form--text-p']}>
							Already have an account ? <span>Log in</span>
						</p>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default UserForm;
