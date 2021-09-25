import React, {createContext, useState} from "react";


const HeroContext = createContext();

const HeroProvider = ({children}) =>{
    const [hero, setHero] = useState([]);
    const [text, setText] = useState("");

   
    console.log(hero);

    const data = { hero, setHero, text, setText}
    return(
        <HeroContext.Provider value={data}>
            {children}
        </HeroContext.Provider>
    )
}

export {HeroProvider};
export default HeroContext;