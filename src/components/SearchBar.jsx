import { useContext } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import HeroContext from '../contexts/HeroContext'
import "../css/searchbar.css";

const SearchBar = () => {
    const { text, setText, getHero } = useContext(HeroContext);

    return (
        <div className="container ">
            <InputGroup className="mb-3 w-75 m-auto">
                <FormControl
                    placeholder="Ingrese su nombre"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button className="btnSearch" onClick={() => getHero(text)} variant="outline-secondary" id="button-addon2">
                    Buscar
                </Button>
            </InputGroup>

        </div>
    )
}

export default SearchBar
