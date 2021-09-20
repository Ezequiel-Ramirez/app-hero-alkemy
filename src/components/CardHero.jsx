import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

const CardHero = ({hero}) => {
    const {toggleAddedHeroToUser, user} = useContext(UserContext);

    const imgStyles = {
        height: "260px",
        objectFit: "cover",
    }

    const isAdded = user?.heroesAdded?.includes(hero.id);
    return (
        <div className="card">
            <img src={hero.imageUrl} alt="{hero.title}" className="card-img-top" style={imgStyles}/>
            <div className="card-body">
            <h4>{hero.title}</h4>
            {
                user?.id &&
            <button onClick={()=> toggleAddedHeroToUser(hero.id)} className={`btn ${isAdded ? "btn-outline-primary" : "btn-success"}`} >{`${isAdded ? "Agregado" : "Agregar"} `}</button>
            }

            </div>            
        </div>

    )
}

export default CardHero
