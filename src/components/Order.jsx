import '../styles/order.css'
import styles from '../styles/Order.module.css'

function Order(){
    return(
		<div className={styles.Order}>
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/flechita.svg" alt="arrow" />
		</div>
    );
}

export { Order }