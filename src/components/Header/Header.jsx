import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.scss'
import { UserContext } from '../../context/UserContext/UserState'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'


const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext)
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const logoutUser = () => {
    logout();
    navigate("/")
  }

  return (
    <nav className="menu">
      <span>
        <Link to='/'>Logo</Link>
      </span>
      <div>


        <span>
          <Link to='/products'>Products</Link>
        </span>
        {token ? (
          <>
            <span>
              <Link to="/profile">Profile</Link>
            </span>
            <span>
              <Link to='/cart'>Cart<Badge count={cart.length} size='small'><ShoppingCartOutlined/></Badge></Link>
            </span>
            <span onClick={logoutUser}>
              <Link to="/">Logout</Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to='/register'>Register</Link>
            </span>
          <span>
            <Link to="/login">Login</Link>
          </span>
          </>
        )}
      </div>
    </nav>
  );
}


export default Header