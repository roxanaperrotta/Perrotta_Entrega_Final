
import {createContext, useState, useEffect} from 'react'



export const CartContext = createContext ()


export const ShoppingCartProvider = ({
    children}) =>{

      const [carrito, setCarrito]= useState ([])
      const [cantidad, setCantidad] = useState (0)

      const agregarProducto = (producto, cantidad) => {
        const existingProductIndex = carrito.findIndex((prod) => prod.id === producto.id);
        if (existingProductIndex !== -1) {
          const updatedCart = [...carrito];
          updatedCart[existingProductIndex].cantidad += cantidad;
          setCarrito(updatedCart);
        } else {
          const numericPrice = parseFloat(producto.precio);
          if (!isNaN(numericPrice)) {
            setCarrito([...carrito, { ...producto, cantidad, precio: numericPrice }]);
          } else {
          }
        }
      };
        

      

  
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