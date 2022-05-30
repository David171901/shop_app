import '../styles/productList.css'
import {ProductItem} from '../components/ProductItem';

function ProductList (){
    return(
		<section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
    );
}

export {ProductList }