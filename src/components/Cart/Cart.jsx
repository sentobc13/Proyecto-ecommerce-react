import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom';
import './Cart.scss'
import orderService from '../../services/OrderServices';

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext); 
  console.log(cart);

  if (cart.length === 0) {
    return (
      <Empty description={<span>Empty cart </span>}>
        <Button type="primary">
          <Link to="/products">Buy Now</Link>
        </Button>
      </Empty>

    );
  }

  const cartItems = cart.map((cartItem, i) => (
    <div className="cart-item" key={i}>
      <span>{cartItem.name}</span>
      <span>{cartItem.price.toFixed(2)}</span>
    </div>
  ));

  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems}
      </div>
      <Button type="primary" onClick={()=>{
        orderService.createOrder(cart)
        clearCart()
      }}>Create Order</Button>
      <Button type="primary" onClick={clearCart}>Clear Cart</Button>
    </div>
  );
};

export default Cart;
