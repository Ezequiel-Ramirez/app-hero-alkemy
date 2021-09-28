import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';
import HeroContext from '../contexts/HeroContext';
import CardHero from './CardHero';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import "../css/teamcontainer.css"

const TeamContainer = () => {
    const { user } = useContext(UserContext);
    const { hero } = useContext(HeroContext);

    return (
        <>

           

            {user?.heroesAdded.length > 0
                ? <div className="container txtHeader" >
                <h1 className="text-center p-5 ">Éste es tu equipo</h1>
                    <div className="row">
                        <Link to="/"><button className="btn btn-outline-success btnBack d-block m-auto ">Seguir Buscando</button></Link>
                        {user?.heroesAdded.map(hero => { return <CardHero hero={hero} key={hero.id} /> })}
                    </div>
                </div>
                :
                <div className="text-center txtHeader"><h6>Tu Team está vacío. Te invitamos a que busques uno: 👉</h6>
                    <SearchBar />
                    <div className="container">
                        <div className="row">

                            {hero.map(hero => { return <CardHero hero={hero} key={hero.id} /> })}
                        </div>
                       
                    </div>
                </div>

            }
        </>
    )
}

export default TeamContainer
