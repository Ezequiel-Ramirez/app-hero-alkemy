import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

const CardHero = ({hero}) => {
    const {toggleAddedHeroToUser, user} = useContext(UserContext);

    const imgStyles = {
        height: "260px",
        objectFit: "cover",
    }
console.log("card")
    const isAdded = user?.heroesAdded?.includes(hero.id);
    return (
    
        <div className="card col-md-3">
            <img src={hero.image.url} alt={hero.name} className="card-img-top" style={imgStyles}/>
            <div className="card-body">
            <h4>{hero.name}</h4>
            {
                user?.id &&
            <button onClick={()=> toggleAddedHeroToUser(hero.id)} className={`btn ${isAdded ? "btn-outline-primary" : "btn-success"}`} >{`${isAdded ? "Agregado" : "Agregar"} `}</button>
            }

            </div>            
        </div>

    )
}

export default CardHero
