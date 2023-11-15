import React from 'react'
import ItemList from './ItemList';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Center } from '@chakra-ui/react';
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = () => {
  const {categoria}= useParams ()
  
  const [productos, setProductos]= useState ([])
  
      useEffect(()=> {
          const db = getFirestore ()
          const itemsCollection = collection (db, "productos")
          getDocs (itemsCollection).then((response)=>{
            // const docs = response.docs.map ((doc)=> doc.data())
              setProductos(response.docs.map ((doc)=> ({id:doc.id, ...doc.data()})))
          })
      },[])


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