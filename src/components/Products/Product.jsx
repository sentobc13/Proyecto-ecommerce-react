import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import './Products.scss';

const Product = (props) => {
  const printProducts = props.products.map(product => {
    return (
      <div className="product-card" key={product.id}>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title={product.name} description={`$${product.price}`} />
          <p>description: {product.description}</p>
          <p>size: {product.size}</p>
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
