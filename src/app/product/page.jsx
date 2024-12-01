import ProductsCard from "../components/ProductsCard";


const ProductPage = async () => {

    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const products = await res.json();

    // console.log(products);

    const limitedProducts = products.slice(0, 20);

    return (
        <div className="px-2 md:px-16 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center">
                {limitedProducts.map(product => <ProductsCard key={product.id} product={product} />)}
            </div>

        </div>
    )
}

export default ProductPage