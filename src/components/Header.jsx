import React, { useState,useContext } from 'react';
import { Menu } from './Menu';
import { MyOrder } from '../containers/MyOrder';
import styles from '../styles/Header.module.css'
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

function Header(){

	const [toggle, setToggle] = useState(false)
	const [toggleOrders, setToggleOrders] = useState(false)

	const handleClick = () => {
		setToggle(!toggle)
	}

	const handleClickOrders = () => {
		setToggleOrders(!toggleOrders)
	}

	const {state} = useContext(AppContext)
	return (
		<nav>
			<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/icon_menu.svg" alt="menu" className={styles.menu} />
			<div className={styles.navbar_left}>
				<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/logos/logo_yard_sale.svg" alt="logo" className={styles.logo}/>
				<ul>
					<li>
						<Link to="/shop_app">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/recovery-password">Recovery Password</Link>
					</li>
				</ul>
			</div>
			<div className={styles.navbar_right}>
				<ul>
					<li className={styles.navbar_email}
					onClick={handleClick}>email@example.com</li>
					<li className={styles.navbar_shopping_cart} onClick={handleClickOrders}>
						<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/icon_shopping_cart.svg" alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export {Header};