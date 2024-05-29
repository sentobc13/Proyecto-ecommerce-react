import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

const Cart = () => {
  const { cart } = useContext(ProductsContext);
  console.log(cart);

  if (cart.length == 0) {
    return <span>No hay ningún producto en el carrito</span>;

  }

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFixed(2)}</span>
      </div>
    )

  });
  return (
    <div>{cartItem}</div>
  )
}

export default Cart