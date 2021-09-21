import React, {createContext, useState} from "react";
import initialMovies from "../const/initialMovies";
import getHero from "../helpers/getHero";

const HeroContext = createContext();

const HeroProvider = ({children}) =>{
    const [hero, setHero] = useState("");

    const updateHero = () =>{
        getHero()
            .then((newHero) =>{
                setHero(newHero);
            })
    }
    const data = {heros: initialMovies, hero, setHero, updateHero}
    return(
        <HeroContext.Provider value={data}>
            {children}
        </HeroContext.Provider>
    )
}

export {HeroProvider};
export default HeroContext;