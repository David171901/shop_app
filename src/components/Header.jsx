import styles from '../styles/Header.module.css'

function Header(){
	console.log(styles)
	return (
		<nav>
			<img src="./icons/icon_menu.svg" alt="menu" className={styles.menu} />
			<div className={styles.navbar_left}>
				<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/logos/logo_yard_sale.svg" alt="logo" className={styles.logo}/>
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className={styles.navbar_right}>
				<ul>
					<li className={styles.navbar_email}>platzi@example.com</li>
					<li className={styles.navbar_shopping_cart}>
						<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/icon_shopping_cart.svg" alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export {Header};