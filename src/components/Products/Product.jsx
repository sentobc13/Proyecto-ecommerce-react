import React from 'react'

const Product = (props) => {
    const printProducts = props.products.map(product => {
        return  <div key={product.id}>
                <p>name:{product.name}</p>
                <p>description:{}</p>
                <p>price:</p>
                <p>size:</p>
                <p>category:</p>
            </div>
        
    })



    return (
        <div>
           {printProducts}
        </div>
    )
}

export default Product