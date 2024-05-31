import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Spin } from 'antd';

const Profile = () => {
  const {getUserInfo, user, token} = useContext(UserContext);

  useEffect(() =>{
    getUserInfo();
  }, [token]);

  if (!user) {
    return  <Spin size="large" />
    
  }
  console.log(user);
  return (

    <div>
      Profile {user.name} 
    </div>
    
  )
}

export default Profile