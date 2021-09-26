import React, { useContext } from 'react'
import HeroContext from '../contexts/HeroContext'
import CardHero from './CardHero'
import SearchBar from './SearchBar';


const Itemlistcontainer = () => {
    const { hero,  setHero} = useContext(HeroContext);
console.log("itemlist")
console.log(hero + "lista")



const getHero = async (name) => {
    //para elegir un id random:
    //const heroIdRandom = Math.floor(Math.random()*10)+1;
    //console.log(heroIdRandom);
    const url = "https://www.superheroapi.com/api/105694171870518/search/" + name;
    const res = await fetch(url);
    const newHero = await res.json();
    const data = newHero.results;
        setHero(data);
        console.log(newHero);
        console.log(hero)
        console.log("1")
}    

    
    return (
        <div className="container" >
            <div className="row">
            <SearchBar getHero={getHero} />
            {hero.map(hero => { return <CardHero hero={hero} key={hero.id} /> })}
               
            </div>
            
        </div>
    )
}

export default Itemlistcontainer
