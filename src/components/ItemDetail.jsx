import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import HeroContext from '../contexts/HeroContext';
import UserContext from '../contexts/UserContext';
import "../css/itemdetail.css"

const ItemDetail = () => {
    const { toggleAddedHeroToUser, user,isAdded } = useContext(UserContext);
    const { idItem } = useContext(HeroContext);
    const [item, setItem] = useState([]);
    const params = useParams();

 
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
        <div className="container txtHeader">
            <div className="row ">
                <div className="col col-md-6">
                    <img className="h-75 imagenCard" src={item.image?.url} alt={item.name} />
                </div>
                <div className="col col-md-6">
                    <h1 className="text-center text-light  fw-bold">{item.name}</h1>
                    <h3 className="text-center text-warning fw-bold">{item.biography?.alignment}</h3>
                    <p className="txtTitulo">Height: <span>{item.appearance?.height[1]}</span></p>
                    <p className="txtTitulo">Weight: <span>{item.appearance?.weight[1]}</span></p>
                    <p className="txtTitulo">Eyes Color: <span>{item.appearance?.["eye-color"]}</span></p>
                    <p className="txtTitulo">Hair Color: <span>{item.appearance?.["hair-color"]}</span></p>
                    <p className="txtTitulo">Combat: <span>{item.powerstats?.combat}</span></p>
                    <p className="txtTitulo">Durability: <span>{item.powerstats?.durability}</span></p>
                    <p className="txtTitulo">Intelligence: <span>{item.powerstats?.intelligence}</span></p>
                    <p className="txtTitulo">Power: <span>{item.powerstats?.power}</span></p>
                    <p className="txtTitulo">Speed: <span>{item.powerstats?.speed}</span></p>
                    <p className="txtTitulo">Strength: <span>{item.powerstats?.strength}</span></p>
                    <Link to={"/"}> <button className="btn btn-dark m-2 " >Volver</button></Link>
                    {
                    user?.id &&
                    <button onClick={() => toggleAddedHeroToUser(item)} className={`btn ${isAdded(item) ? "btn-danger" : "btn-success"}`} >{`${isAdded(item) ? "Eliminar" : "Agregar"} `}</button>
                }
                </div>



            </div>
        </div>
    )
}

export default ItemDetail
