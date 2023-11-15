import React from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {doc, getDoc, getFirestore} from 'firebase/firestore'


const ItemDetailContainer = () => {

  const {id} = useParams ()
  const [producto, setProducto] = useState ([])

  useEffect(()=>{
      const db= getFirestore ()
      const oneItem = doc (db, 'productos', `${id}`)
      getDoc(oneItem).then((snapshot) =>{
          if (snapshot.exists ()){
              const docs=snapshot.data()
              setProducto(docs)
          }
      })

  }, [])

      
  return (
    <>
    <ItemDetail producto = {producto}  />      
    </>
  )
}

export default ItemDetailContainer