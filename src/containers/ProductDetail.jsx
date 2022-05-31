import styles from '../styles/OrderItem.module.css'
import {ProductInfo} from '../components/ProductInfo';

function ProductDetail(){
    return(
		<aside className={styles.ProductDetail}>
			<div className={style.ProductDetail_close}>
				<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo></ProductInfo>
		</aside>
    );
}

export {ProductDetail}