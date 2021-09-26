import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import "../css/cardhero.css"

const CardHero = ({ hero }) => {
    const { toggleAddedHeroToUser, user } = useContext(UserContext);

    const imgStyles = {
        height: "260px",
        objectFit: "cover",
    }
    console.log("card")
    const isAdded = user?.heroesAdded?.includes(hero.id);
    return (

        <div className="card col-lg-3 col-md-4 m-auto ">
            {/* <img src={hero.image.url} alt={hero.name} className="card-img-top" style={imgStyles} /> */}
            <div className="card-body">
                <h4 className="text-center">{hero.name}</h4>

                <figure className="snip1455 m-auto">
                    <img src={hero.image.url} alt={hero.name} />
                    <figcaption className="col-md-3">
                        <h3>{hero.name}</h3>
                        <h5>Alineación: <span>{hero.biography.alignment}</span></h5>
                        <p>{hero.work.occupation}</p>{/* <link href="#" class="read-more">Read More</link> */}
                    </figcaption>
                </figure>
                
                <Link to={`/item/${hero.id}`}> <button className="btn btn-dark m-2">+ Info</button></Link>
                {
                    user?.id &&
                    <button onClick={() => toggleAddedHeroToUser(hero.id)} className={`btn ${isAdded ? "btn-outline-primary" : "btn-success"}`} >{`${isAdded ? "Agregado" : "Agregar"} `}</button>
                }

            </div>
        </div>

    )
}

export default CardHero
