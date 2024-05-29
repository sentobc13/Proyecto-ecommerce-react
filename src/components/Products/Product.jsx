import React from 'react'
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'

const Product = (props) => {
    const printProducts = props.products.map(product => {
        return <Card
            key={product.id}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title={product.name} description={product.price} />
            <p>description:{product.description}</p>
            <p>size:{product.size}</p>
            <Button onClick={()=> addCart(product)}/>
        </Card>
    })



    return (
        <div>
            {printProducts}
        </div>
    )
}

export default Product