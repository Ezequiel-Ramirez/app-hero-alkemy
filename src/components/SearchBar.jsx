import { useContext } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import HeroContext from '../contexts/HeroContext'
/* import getHero from '../helpers/getHero'; */

const SearchBar = ({ getHero }) => {
    const { text, setText } = useContext(HeroContext);

    return (
        <div className="container">
            <InputGroup className="mb-3 w-75 m-auto">
                <FormControl
                    placeholder="Ingrese su nombre"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button onClick={() => getHero(text)} variant="outline-secondary" id="button-addon2">
                    Buscar
                </Button>
            </InputGroup>
            {/*  <form>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" onClick={()=>getHero(text)} >
                Buscar
            </button>
            </form> */}
        </div>
    )
}

export default SearchBar
