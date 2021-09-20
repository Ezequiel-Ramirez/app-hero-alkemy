import {createContext, useState} from 'react';

const UserContext = createContext();

const initialUser = { id: 1, name: "Miguel", heroesAdded: [1,2]}


const UserProvider = ( {children}) => {

    const [user, setUser] = useState(initialUser);

    const login = () =>{
        setUser(initialUser);
    }
    const logout = () =>{
        setUser(null);
    }
    const toggleAddedHeroToUser = (heroId) =>{
        const isAdded = user.heroesAdded.includes(heroId);
        const heroesAdded = isAdded
        ? user.heroesAdded.filter(favHero => favHero !== heroId) //delete
        :[...user.heroesAdded, heroId] //add
        setUser({...user, heroesAdded })
    }

    const data = {user, login, logout, toggleAddedHeroToUser}
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider}
export default UserContext
