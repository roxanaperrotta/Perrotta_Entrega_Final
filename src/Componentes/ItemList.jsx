import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    console.log(productos)
  return (
    <div>
        { productos.map((p)=>{
            return(
                <Item
                key={p.id}
                id={p.id}
                imagen={p.imagen}
                nombre={p.nombre}
                />
            )
        })
    }
    </div>
  )
}

export default ItemList