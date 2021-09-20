import React, {createContext} from "react";
import initialMovies from "../const/initialMovies";

const HeroContext = createContext();

const HeroProvider = ({children}) =>{

    const data = {heros: initialMovies}

    return(
        <HeroContext.Provider value={data}>
            {children}
        </HeroContext.Provider>
    )
}

export {HeroProvider};
export default HeroContext;