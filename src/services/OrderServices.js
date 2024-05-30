import axios from "axios"

const API_URL = "http://localhost:3000/orders";

const createOrder =async (cart)=>{
    const token = localStorage.getItem("token")
    const ids = cart.map(products => products.id)
    await axios.post(API_URL,{ProductId:ids},{
        headers:{
           Authorization:token 
        }
    })
}

const orderService ={
    createOrder
}

export default orderService