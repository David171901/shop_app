import styles from '../styles/OrderItem.module.css'
import { AppContext } from '../context/AppContext';
import React, { useContext } from 'react';

function OrderItem(props){

	const {removeFromCart} = useContext(AppContext)

	const handleRemove = item => {
		removeFromCart(item)
	}

    return(
		<div className={styles.OrderItem}>
			<figure>
				<img src={props.product.images[0]} alt={props.product.title} />
			</figure>
			<p>{props.product.title}</p>
			<p>$ {props.product.price}</p>
			<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/icon_close.png" 
			alt="close"
			onClick={()=> handleRemove(props.product)} />
		</div>
    );
}

export {OrderItem}