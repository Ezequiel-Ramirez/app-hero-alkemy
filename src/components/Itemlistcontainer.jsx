import React, { useContext, useEffect } from 'react'
import HeroContext from '../contexts/HeroContext'
import CardHero from './CardHero'


const Itemlistcontainer = () => {
    const {heros, hero, setHero, updateHero} = useContext(HeroContext);

    useEffect(() => {
        updateHero();
        
    }, [])
    return (
        <div className="container" >
            <div className="row">
                { hero.map(hero => (
                    <div className="col-md-3" key={hero.id}>
                        <CardHero hero={hero}/>
                    </div>
                ))}

               {/*  <CardHero hero={hero}/> */}
            </div>
            
        </div>
    )
}

export default Itemlistcontainer
