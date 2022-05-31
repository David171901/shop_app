import styles from '../styles/Login.module.css'

function Login(){
    return(
      <div className={styles.Login}>
        <div className={styles.Login_container}>
          <img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-11/src/assets/logos/logo_yard_sale.svg" alt="logo" className={styles.logo}/>
          <form action="/" className={styles.form}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" />
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
            <input type="submit" value="Log in" className="primary-button login-button" />
            <a href="/">Forgot my password</a>
          </form>
          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    );
}

export {Login}