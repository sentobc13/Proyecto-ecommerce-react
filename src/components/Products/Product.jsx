import React, { useContext } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import './Products.scss';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';


const Product = () => {
    const { products, addCart } = useContext(ProductsContext);
    const printProducts = products.map(product => {
        return (
            <div className="product-card" key={product.id}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title={product.name} description={`€${product.price}`} />
                    <p>description: {product.description}</p>
                    <p>size: {product.size}</p>
                    <button onClick={() => addCart(product)}>Add to Cart</button>
                </Card>
            </div>
        );
    });

    return (
        <div className="products-grid">
            {printProducts}
        </div>
    );
}

export default Product;
