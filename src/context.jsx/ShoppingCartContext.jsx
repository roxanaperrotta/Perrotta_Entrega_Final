
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
        
      }
         else {

          const numericPrice = parseFloat(producto.precio);
          if (!isNaN(numericPrice)) {
            setCarrito([...carrito, { ...producto, cantidad, precio: numericPrice }]);
          } else {
          }
        }
      };
        
      const sacarProducto = (productoId) => {
        const updatedCart = carrito.filter((prod) => prod.id !== productoId);
        setCarrito(updatedCart);
      
      };
    
      const limpiarCarrito = () => {
        setCarrito([]);
      };

      const limpiarCantidad=()=>{
        setCantidad (0);
      };
    
      const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
      const totalPrecio = carrito.reduce((acc, producto) => {
        if (!isNaN(producto.precio) && !isNaN(producto.cantidad)) {
          return acc + producto.precio* producto.cantidad;
        }
        return acc;
      }, 0);
      

  
        const suma=()=>{
            cantidad<10? setCantidad(cantidad+1):alert("No hay stock")
           }
         
           const resta=()=>{
             cantidad>0? setCantidad(cantidad-1):alert("Mínimo alcanzado")
           }
        
        

    return(
    
        <CartContext.Provider value= {{  cantidad, setCantidad, suma, resta, carrito, setCarrito, agregarProducto, sacarProducto, limpiarCarrito, totalCantidad, totalPrecio, limpiarCantidad }}>
        {children}
        </CartContext.Provider>

    )
    }
    export default ShoppingCartProvider