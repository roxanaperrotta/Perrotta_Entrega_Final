
import {createContext, useState} from 'react'
import { useParams } from 'react-router-dom'


export const CartContext = createContext ()


export const ShoppingCartProvider = ({
    children}) =>{
    
      const [cantidad, setCantidad] = useState (0)
      const carrito=[]
  
 
      const agregarAlCarrito = (id) => {
          const ProductoExistente = carrito.find(producto => producto.id === id);
          if (ProductoExistente){
            ProductoExistente.cantidad+= 1;
            localStorage.setItem('carrito',JSON.stringify(carrito));
          }
          else{
            const producto = productos.find(producto =>producto.id===id);
            carrito.push(producto);
            localStorage.setItem('carrito',JSON.stringify(carrito));
          }
        }
     {/*} 
      function actualizarCarrito() {
          let aux = '';
          carrito.forEach((producto) => {
            aux += `
                      <div class="card col-xl-3 col-md-6 col-sm-12">
                          <img src="img/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                          <div class="card-body">
                              <h3 class="card-title"> ${producto.nombre} </h3>
                              <p class="card-text"> ${producto.precio} </p>
                              <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                          </div>
                      </div>
                      `;
          });
        }
      
        const eliminarDelCarrito = (id) => {
          const producto = carrito.find((producto) => producto.id === id);
          if (producto){
            if (producto.cantidad>1){
              producto.cantidad -= 1;
              localStorage.setItem('carrito',JSON.stringify(carrito));
            } else{
              carrito.splice(carrito.indexOf(producto), 1);
              localStorage.setItem('carrito',JSON.stringify(carrito));
            }
          
          actualizarCarrito();
        }};
      
        const totalCompra = document.getElementById("fin");
        
        
      
        const calcularTotalCompra = () => {
          let total = 0;
          carrito.forEach((producto) => {
            total += producto.precio * producto.cantidad;
          });
          totalCompra.innerHTML = total;
        };
        const vaciarCarrito = () => {
          carrito.splice(0, carrito.length);
        }
       */}
        const suma=()=>{
            cantidad<10? setCantidad(cantidad+1):alert("No hay stock")
           }
         
           const resta=()=>{
             cantidad>0? setCantidad(cantidad-1):alert("Mínimo alcanzado")
           }
           const mostrar=()=>{
            
            alert(`Productos agregados ${cantidad}`)
           }   
           
     
        

    return(
        <CartContext.Provider value= {{carrito, agregarAlCarrito, cantidad, setCantidad, suma, resta }}>
        {children}
        </CartContext.Provider>
    )
    }
    export default ShoppingCartProvider