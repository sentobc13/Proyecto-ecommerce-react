import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { UserContext } from '../../context/UserContext/UserState'

const Header = () => {
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logoutUser();
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
            <Link to="/">Login</Link>
          </span>
        )}
      </div>
    </nav>
  );
}

// return (
//   <nav className='menu'>
//     <Link to='/'>Home</Link>
//     <Link to='/login'>Login</Link>
//     <Link to='/products'>Products</Link>
//     <Link to='/profile'>Profile</Link>
//     <Link to='/cart'>Cart</Link>
//     <Link to='/register'>Register</Link>
//   </nav>
// )



export default Header