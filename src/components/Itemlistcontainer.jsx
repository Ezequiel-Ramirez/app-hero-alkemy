import React, { useContext } from 'react'
import HeroContext from '../contexts/HeroContext'
import CardHero from './CardHero'


const Itemlistcontainer = () => {
    const {heros} = useContext(HeroContext)
    return (
        <div className="container" >
            <div className="row">
                { heros.map(hero => (
                    <div className="col-md-3" key={hero.id}>
                        <CardHero hero={hero}/>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Itemlistcontainer
