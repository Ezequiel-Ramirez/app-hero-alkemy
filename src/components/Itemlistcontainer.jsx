import React, { useContext, useState } from 'react'
import HeroContext from '../contexts/HeroContext'
import CardHero from './CardHero'
import SearchBar from './SearchBar';



const Itemlistcontainer = () => {
    const { hero, setHero, text, setText } = useContext(HeroContext);
    const [stateSearch, setStateSearch] = useState();

    const validarCampos = () => {
        if (text === "" || text === Number) {
            return false
        } else {
            return true
        };
    }
    const getHero = async (name) => {
        //para elegir un id random:
        //const heroIdRandom = Math.floor(Math.random()*10)+1;
        //console.log(heroIdRandom);
        if (validarCampos()) {
            const url = "https://www.superheroapi.com/api/105694171870518/search/" + name;
            const res = await fetch(url);
            const newHero = await res.json();
            const data = newHero.results;
            setHero(data);
            setStateSearch(true);
            setText("");
            
        }else{
            setStateSearch(false);
           alert("Ingrese un nombre por favor!!!")
        }
    }


    return (
        <div className="container" >
            <div className="row">
            {
                stateSearch?<>
                <SearchBar getHero={getHero} />
               { hero.map(hero => { return <CardHero hero={hero} key={hero.id} /> })}</>
                :
                <>
                <h1 className="text-center p-5">Busca tu Super Héroe</h1>
                <SearchBar getHero={getHero} />
                </>
            }

            </div>

        </div>
    )
}

export default Itemlistcontainer
