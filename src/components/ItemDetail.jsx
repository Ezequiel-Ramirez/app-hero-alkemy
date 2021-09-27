import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import HeroContext from '../contexts/HeroContext';
import UserContext from '../contexts/UserContext';

const ItemDetail = () => {
    const { toggleAddedHeroToUser, user } = useContext(UserContext);
    const { idItem } = useContext(HeroContext);
    const [item, setItem] = useState([]);
    const params = useParams();

    const isAdded = user?.heroesAdded?.includes(item.id);
    console.log(idItem);

    const getItem = useCallback(async (id) => {
        const url = "https://www.superheroapi.com/api/105694171870518/" + id;
        const res = await fetch(url);
        const newHero = await res.json();
        setItem(newHero);
    },[])
    /*  const getItem =  ((id) =>{
         fetch("https://www.superheroapi.com/api/105694171870518/" + id)
         .then((respuesta) => respuesta.json())
         .then((transformacion)=>setItem(transformacion))
     }) */

    /*  const getItem = async (id) => {
         const url = "https://www.superheroapi.com/api/105694171870518/" + id;
         const res = await fetch(url);
         const newHero = await res.json();
         const data = newHero;
         return data;
     } */

    useEffect(() => {
        getItem(params.id);
    }, [getItem, params.id])

    return (
        <div className="container">
            <div className="row ">
                <div className="col col-md-6">
                    <img className="h-75" src={item.image?.url} alt={item.name} />
                </div>
                <div className="col col-md-6">
                    <h1 className="text-center text-danger fw-bold">{item.name}</h1>
                    <p>Gender: <span>{item.appearance?.gender}</span></p>
                    <p>Height: <span>{item.appearance?.height[1]}</span></p>
                    <p>Weight: <span>{item.appearance?.weight[1]}</span></p>
                    <p>Aliases: <span>{item.biography?.aliases.join()}</span></p>
                    <p>Eyes Color: <span>{item.appearance?.["eye-color"]}</span></p>
                    <p>Hair Color: <span>{item.appearance?.["hair-color"]}</span></p>
                    <p>Work Base: <span>{item.work?.base}</span></p>
                    <Link to={"/"}> <button className="btn btn-dark m-2 " >Volver</button></Link>
                    {
                    user?.id &&
                    <button onClick={() => toggleAddedHeroToUser(item.id)} className={`btn ${isAdded ? "btn-outline-primary" : "btn-success"}`} >{`${isAdded ? "Agregado" : "Agregar"} `}</button>
                }
                </div>



            </div>
        </div>
    )
}

export default ItemDetail
