import '../styles/productDetail.css'
import {ProductInfo} from '../components/ProductInfo';

function ProductDetail(){
    return(
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo></ProductInfo>
		</aside>
    );
}

export {ProductDetail}