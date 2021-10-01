import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import HeroContext from '../contexts/HeroContext'
import "../css/cardhero.css"

const CardHero = ({ hero }) => {
    const {  user, isAdded, tercerFuncion } = useContext(UserContext);
    const { setIdItem} = useContext(HeroContext);

    console.log("card")
    console.log(user);
    
    return (

        <div className="card col-lg-3 col-md-4 mt-2  m-auto ">

            <div className="card-body ">
                <h4 className="text-center text-dark">{hero.name}</h4>

                <figure className="snip1455 m-auto">
                    <img src={hero.image.url} alt={hero.name} />
                    <figcaption className="col-md-3">
                        <h3>{hero.name}</h3>
                        <h5>Alineación: <span>{hero.biography.alignment}</span></h5>
                        <p>{hero.work.occupation}</p>
                        
                    </figcaption>
                </figure>

                <Link to={`/item/${hero.id}`}> <button className="btn btn-outline-dark m-2  " onClick={()=>setIdItem(hero.id)}>+ Info</button></Link>
                {
                    user?.id &&
                 
                   
                    <button onClick={() => tercerFuncion(hero)} className={`btn  ${isAdded(hero) ? "btn-danger" : "btn-success"}`} >{`${isAdded(hero) ? "Eliminar" : "Agregar"} `}</button>
                   
                    
                }

            </div>
        </div>

    )
}

export default CardHero
