import React, { useContext } from 'react'
import HeroContext from '../contexts/HeroContext'
import CardHero from './CardHero'
import SearchBar from './SearchBar';



const Itemlistcontainer = () => {
    const { hero, stateSearch } = useContext(HeroContext);
    
    return (
        <div className="container" >
            <div className="row">
            {
                stateSearch?<>
                <SearchBar />
               { hero.map(hero => { return <CardHero hero={hero} key={hero.id} /> })}</>
                :
                <>
                <h1 className="text-center p-5">Busca tu Super Héroe</h1>
                <SearchBar  />
                </>
            }

            </div>

        </div>
    )
}

export default Itemlistcontainer
