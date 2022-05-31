import '../styles/newPassword.css'

function NewPassword (){
    return(
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-11/src/assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new passwrd for yue account</p>
				<form action="/" className="form">
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label for="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
    );
}

export {NewPassword }