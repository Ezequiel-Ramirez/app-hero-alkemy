import { useContext } from 'react'
import HeroContext from '../contexts/HeroContext'
/* import getHero from '../helpers/getHero'; */

const SearchBar = ({getHero}) => {
    const { text, setText } = useContext(HeroContext);
    console.log("search")

    
    return (
        <div className="container">
       
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button  onClick={()=>getHero(text)} >
                Buscar
            </button>
          
        </div>
    )
}

export default SearchBar
