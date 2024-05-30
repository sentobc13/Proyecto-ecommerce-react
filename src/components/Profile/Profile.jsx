import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'

const Profile = () => {
  const {getUserInfo, user, token} = useContext(UserContext);

  useEffect(() =>{
    getUserInfo();
  }, [token]);

  if (!user) {
    return <span> Loading...</span>
    
  }
  return (

    <div>Profile {user.name}</div>
  )
}

export default Profile