import '../styles/productItem.css'

function ProductItem (){
    return(
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure>
					<img src="https://static.platzi.com/media/tmp/class-files/github/react-practico/react-practico-react-10/src/assets/icons/bt_add_to_cart.svg" alt="" />
				</figure>
			</div>
		</div>
    );
}

export {ProductItem}