import React, {createContext, useState} from "react";


const HeroContext = createContext();

const HeroProvider = ({children}) =>{
    const [hero, setHero] = useState([]);
    const [text, setText] = useState("");
    const [idItem, setIdItem] = useState("");
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
   
   
    console.log(hero);

    const data = { hero, setHero, text, setText, idItem, setIdItem, getHero, stateSearch}
    return(
        <HeroContext.Provider value={data}>
            {children}
        </HeroContext.Provider>
    )
}

export {HeroProvider};
export default HeroContext;