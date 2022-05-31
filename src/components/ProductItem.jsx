import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import styles from '../styles/ProductItem.module.css'

function ProductItem (props){

	const {addToCart} = useContext(AppContext)

	const handleClick = item => {
		addToCart(item)
	}

    return(
		<div className={styles.ProductItem}>
			<img src={props.product.images[0]} alt={props.product.description} />
			<div className={styles.product_info}>
				<div>
					<p>$ {props.product.price}</p>
					<p>{props.product.title}</p>
				</div>
				<figure onClick={()=>handleClick(props.product)}>
					<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/bt_add_to_cart.svg" alt="" />
				</figure>
			</div>
		</div>
    );
}

export {ProductItem}