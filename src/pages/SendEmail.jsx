import styles from '../styles/SendEmail.module.css'
import '../styles/SendEmail.module.css'

function SendEmail(){
    return(
		<div className={styles.SendEmail}>
			<div className={styles.form_container}>
				<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-11/src/assets/logos/logo_yard_sale.svg" alt="logo" className={styles.logo} />
				<h1 className={styles.title}>Email has been sent!</h1>
				<p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
				<div className={styles.email_image}>
					<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-11/src/assets/icons/email.svg" alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className={styles.resend}>
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
    );
}

export {SendEmail}