import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'

const Profile = () => {
  const {getUserInfo, user} = useContext(UserContext);

  useEffect(() =>{
    getUserInfo();
  }, []);

  if (!user) {
    return <span> Loading...</span>
    
  }
  return (

    <div>Profile {user.name}</div>
  )
}

export default Profile