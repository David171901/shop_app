import { useEffect, useState } from 'react';

const useGetProducts = (API) =>{
    const [products,setProducts] = useState([]);

	useEffect(() => {
		fetch(API)
		.then(response => response.json())
		.then(data => setProducts(data));
	},[]);

    return products;
}

export {useGetProducts}