import React from 'react'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const productos = [
        {
            id: '1',
            imagen:"../imagenes/empanadacarne.jpeg",
            categoria: 'empanada',
            nombre: 'Empanada de Carne',
            descripción: 'empanada rellena de carne de ternera cortada a cuchillo con huevo y aceituna',
            stock: 30,
            precio:650
          },
          {
            id: '2',
            imagen:"../imagenes/empanadajamon.png",
            categoria:'empanada',
            nombre: 'Empanada de Jamón y Queso',
            descripción: 'empanada rellena de jamón y queso',
            stock: 30,
            precio:650,
          },
          {
            id: '3',
            imagen: "../imagenes/muzarela.jpeg",
            categoria:'pizza',
            nombre: 'Pizza Muzarella',
            descripción: 'Pizza de muzarella, tomate y aceitunas',
            stock: 10,
            precio:3900,
          },
          {
            id: '4',
            imagen:"../imagenes/cuatro.jpeg",
            categoria:'pizza',
            nombre: 'Pizza cuatro quesos',
            descripción: 'pizza a los cuatro quesos: parmesano, roquefort, muzarella y fontina',
            stock: 10,
            precio:3900,
          },
          {
            id: '5',
            imagen:"../imagenes/tartaverdura.jpeg",
            categoria:'tarta',
            nombre: 'tarta de verdura',
            descripción: 'tarta rellena de espinaca y muzarella',
            stock: 10,
            precio:4500,
          },
        ];
      const mostrarProductos= new Promise ((resolve, reject)=>{
      if (productos.length > 0){
      setTimeout (()=>{
        resolve(productos)
      }, 3000)
      }else{
        reject("No se encontraron productos")
      
      }
      })
      
      mostrarProductos
      .then((resultado)=>{
      console.log(resultado)
      })
      .catch((error)=>{
      console.log(error)
      })
      
      
  return (
    <>
    <ItemDetail productos = {productos}  />      
    </>
  )
}

export default ItemDetailContainer