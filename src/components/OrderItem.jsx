import styles from '../styles/OrderItem.module.css'

function OrderItem(){
    return(
		<div className={styles.OrderItem}>
			<figure>
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/icon_close.png" alt="close" />
		</div>
    );
}

export {OrderItem}