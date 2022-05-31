import styles from '../styles/MyOrder.module.css'
import {OrderItem} from '../components/OrderItem';
import { AppContext } from '../context/AppContext';
import React, { useContext } from 'react';

function MyOrder(){

	const {state} = useContext(AppContext)

	const sum = () =>{
		const prices = state.cart.map(e=>e.price)
		return prices.reduce((partialSum, a) => partialSum + a, 0)
	}

    return(
		<aside className={styles.MyOrder}>
			<div className={styles.title_container}>
				<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/flechita.svg" alt="arrow" />
				<p className={styles.title}>My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((item,index)=>{
					return <OrderItem key={'myorder-'+index} product={item}/>
				})}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>$ {sum()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
    );
}

export {MyOrder}