import {useState} from 'react'
import {collection, addDoc, getFirestore} from 'firebase/firestore'

const SendOrders = () => {

    const [nombre, setNombre] = useState ("")
    const [email, setEmail] = useState ("")
    const [orderId, setOrderId] = useState (null)
    const db = getFirestore ()
    
    const handleSubmit = (e)=>{
        e.preventDefault ()
        addDoc (ordersCollection, order).then (({id})=>
        setOrderId (id)
        )
    } 
  return (
    <div>SendOrders</div>
  )
}

export default SendOrders