import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.scss'
import { UserContext } from '../../context/UserContext/UserState'

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate()

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
            <span onClick={logoutUser}>
              <Link to="/">Logout</Link>
            </span>
            <span>
              <Link to="/profile">Profile</Link>
            </span>
            <span>
              <Link to='/cart'>Cart</Link>
            </span>
            <span>
            <Link to='/register'>Register</Link>
            </span>
          </>
        ) : (
          <span>
            <Link to="/login">Login</Link>
          </span>
        )}
      </div>
    </nav>
  );
}


export default Header