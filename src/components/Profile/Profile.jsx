import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Card, Spin } from 'antd';
import Meta from 'antd/es/card/Meta';
import './Profile.scss'

const Profile = () => {
  const { getUserInfo, user, token } = useContext(UserContext);



  useEffect(() => {
    getUserInfo();
  }, [token]);

  if (!user) {
    return <Spin size="large" />

  }
  console.log(user);

  return (
    <div className='profile'>
      <div className="user-card">
        <Card
          hoverable
          style={{ maxWidth: '300px' }}
          cover={<img alt={user.name} src={user.image || 'https://via.placeholder.com/150'} />}
        >
          <div className="card-info">
            <Meta title={user.name} />
            <p className="text-body">Email: {user.email}</p>
          </div>
        </Card>
      </div>
      <div className="order-card" key={user.id}>
        <Card
          hoverable
          style={{ maxWidth: '300px' }}
        >
          <div className="card-info">
            <Meta title='Pedidos' />
            <div className='orders-container'>
              {
                user.Orders.map(order => {
                const productsOrder=  order.Products.map((product)=>{
                    return(
                      <p>{product.name}</p>
                    )
                  })
                  return(
                    <div>
                      <h3>Numero de pedido: {order.id}</h3>
                      {productsOrder}
                    </div>
                  )
                }

              )
              }
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}


export default Profile