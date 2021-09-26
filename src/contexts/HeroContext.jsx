import React, {createContext, useState} from "react";


const HeroContext = createContext();

const HeroProvider = ({children}) =>{
    const [hero, setHero] = useState([]);
    const [text, setText] = useState("");
    const [idItem, setIdItem] = useState("");


   
   
    console.log(hero);

    const data = { hero, setHero, text, setText, idItem, setIdItem}
    return(
        <HeroContext.Provider value={data}>
            {children}
        </HeroContext.Provider>
    )
}

export {HeroProvider};
export default HeroContext;