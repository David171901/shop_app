import styles from '../styles/ProductList.module.css';
import {ProductItem} from '../components/ProductItem';
import { useGetProducts } from '../hooks/useGetProducts';

const API = 'http://api.escuelajs.co/api/v1/products'

function ProductList (){

	const products = useGetProducts(API)

    return(
		<section className="main-container">
			<div className={styles.ProductList}>
				{products.map((product)=>{
					return <ProductItem key={product.id} product={product}/>
				})}
			</div>
		</section>
    );
}

export {ProductList }