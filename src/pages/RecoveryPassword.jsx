import styles from '../styles/RecoveryPassword.module.css'

function RecoveryPassword(){
  return(
		<div className={styles.PasswordRecovery}>
			<div className={styles.PasswordRecovery_container}>
				<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-11/src/assets/logos/logo_yard_sale.svg" alt="logo" className={styles.logo}/>
				<h1 className={styles.title}>Password recovery</h1>
				<p className={styles.subtitle}>Inform the email address used to create your account</p>
				<form action="/" className={styles.form}>
					<label htmlFor="email" className={styles.label}>Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
    );
}

export {RecoveryPassword}