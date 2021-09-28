import React, {createContext, useState} from 'react';

const UserContext = createContext();

const initialUser = { id: 1, name: "Alkemy", heroesAdded: []}


const UserProvider = ( {children}) => {

    const [user, setUser] = useState(initialUser);
    
    

    const login = () =>{
        setUser(initialUser);
    }
    const logout = () =>{
        setUser(null);
    }
    //funcion para agregar o eliminar un heroe del team usuario
    const toggleAddedHeroToUser = (hero) =>{
        const isInTeam = user?.heroesAdded?.find((item)=> item.id === hero.id)
        const heroesAdded = isInTeam
        ? user.heroesAdded.filter(favHero => favHero.id !== hero.id) //delete 
        :[...user.heroesAdded, hero] //add
        setUser({...user, heroesAdded })
    }
//funcion para detectar si se encuentra el heroe en el team y setear el boton de agregar/eliminar
    const isAdded = (hero) =>{
        let isInTeam = user?.heroesAdded?.find((item)=> item.id === hero.id)
        if ( isInTeam) {
            user?.heroesAdded?.filter(favHero => favHero.id !== hero.id)
            return true
        } else {
            return false
        }
    }

    const data = {user, login, logout, toggleAddedHeroToUser, isAdded}
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider}
export default UserContext
