import React from 'react'
import ItemList from './ItemList';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Center } from '@chakra-ui/react';


const ItemListContainer = () => {
  const {categoria}= useParams ()

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


/*const getProducts=async ()=>{
    const response= await fetch ("https://fakestoreapi.com/products")
    const data= await response.json()
    return data
  }

const [product, setProduct]=useState([])

useEffect (()=>{
  getProducts (). then ((p) => setProduct (p))
}, [])*/


const filteredProduct = productos.filter((producto) => producto.categoria == categoria)


  return (
    <>
    <Center p="1rem">
       {categoria ? <ItemList productos={filteredProduct} /> : <ItemList productos={productos} />}
    </Center>  
    </>
  )
  }

export default ItemListContainer