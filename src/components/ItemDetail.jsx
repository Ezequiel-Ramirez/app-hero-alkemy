import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router'
import HeroContext from '../contexts/HeroContext'

const ItemDetail = () => {
    const { hero,  setHero} = useContext(HeroContext);
    const [item, setItem] = useState("");
    const params = useParams();
    
    
    useEffect(() => {
        const getItem = new Promise ((res,rej) =>{
            const pedido = fetch("https://www.superheroapi.com/api/105694171870518/" + params.id)
            pedido.then((respuesta) =>{
                return respuesta.json()
            })
            .then((transformacion)=>{
                res(transformacion)
            })
        })
        getItem.then((data)=>{
            setItem(data);
        })
       
       
    }, [ params.id])

    return (
        <div>
          <h3>Hola{item.name}</h3>
        </div>
    )
}

export default ItemDetail
