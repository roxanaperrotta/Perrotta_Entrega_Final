
import {createContext, useState, useEffect} from 'react'



export const CartContext = createContext ()


export const ShoppingCartProvider = ({
    children}) =>{

      const [carrito, setCarrito]= useState ([])
      const [cantidad, setCantidad] = useState (0)

      const agregarProducto = (producto, cantidad) => {
        alert (`vas a agregar ${cantidad} productos a tu carrito`)
        const productoExistente = carrito.find ((p)=> p.id ===producto.id);
        if (productoExistente>0){
          const actualizarCarrito=[...carrito]
          actualizarCarrito(productoExistente).cantidad += cantidad
          setCarrito (actualizarCarrito)
        }

      }

  
        const suma=()=>{
            cantidad<10? setCantidad(cantidad+1):alert("No hay stock")
           }
         
           const resta=()=>{
             cantidad>0? setCantidad(cantidad-1):alert("Mínimo alcanzado")
           }
        
        

    return(
        <CartContext.Provider value= {{ cantidad, setCantidad, suma, resta, carrito, setCarrito, agregarProducto }}>
        {children}
        </CartContext.Provider>
    )
    }
    export default ShoppingCartProvider