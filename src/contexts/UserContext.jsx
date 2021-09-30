import React, { createContext, useState } from 'react';

const UserContext = createContext();

const initialUser = { id: 1, name: "Alkemy", heroesAdded: [] }

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(initialUser);
  const [totalStats, setTotalStats] = useState([]);



  const handleStats = (hero) => {
    const isHero = user?.heroesAdded?.find((item) => item.id === hero.id)
    console.log("encontrado")
    console.log(isHero)
    if (isHero === undefined) {
     
      const handleCombat =
        parseInt(totalStats.combat) + parseInt(hero?.powerstats?.combat);
      const handleDurability =
        parseInt(totalStats.durability) + parseInt(hero?.durability);
      const handleIntelligence =
        parseInt(totalStats.intelligence) + parseInt(hero.powerstats?.intelligence);
      const handlePower = parseInt(totalStats.power) + parseInt(hero?.powerstats?.power);
      const handleSpeed = parseInt(totalStats.speed) + parseInt(hero?.powerstats?.speed);
      const handleStrength =
        parseInt(totalStats.strength) + parseInt(hero?.powerstats?.strength);
      const newStats = {
        combat: handleCombat.toString(),
        durability: handleDurability.toString(),
        intelligence: handleIntelligence.toString(),
        power: handlePower.toString(),
        speed: handleSpeed.toString(),
        strength: handleStrength.toString(),
      };
      setTotalStats(newStats);
      console.log(totalStats)
      
    } else {
      console.log("sino")
      console.log(isHero)
   
      const newCombat =
        parseInt(totalStats.combat) - parseInt(hero.powerstats?.combat);
      const newDurability =
        parseInt(totalStats.durability) - parseInt(hero.powerstats?.durability);
      const newIntelligence =
        parseInt(totalStats.intelligence) -
        parseInt(hero.powerstats?.intelligence);
      const newPower =
        parseInt(totalStats.power) - parseInt(hero.powerstats?.power);
      const newSpeed =
        parseInt(totalStats.speed) - parseInt(hero.powerstats?.speed);
      const newStrength =
        parseInt(totalStats.strength) - parseInt(hero.powerstats?.strength);
      const newStats = {
        combat: newCombat.toString(),
        durability: newDurability.toString(),
        intelligence: newIntelligence.toString(),
        power: newPower.toString(),
        speed: newSpeed.toString(),
        strength: newStrength.toString(),
      };
      setTotalStats(newStats);
    }
  };



  const login = () => {
    setUser(initialUser);
  }
  const logout = () => {
    setUser(null);
  }
  //funcion para agregar o eliminar un heroe del team usuario
  const toggleAddedHeroToUser = (hero) => {
    const isInTeam = user?.heroesAdded?.find((item) => item.id === hero.id)
    const heroesAdded = isInTeam
      ? user.heroesAdded.filter(favHero => favHero.id !== hero.id)//delete 
      : [...user.heroesAdded, hero] //add
    setUser({ ...user, heroesAdded });
    handleStats(hero);
    console.log(totalStats)
  }
const tercerFuncion = (hero) =>{
  toggleAddedHeroToUser(hero);
  handleStats(hero);
  console.log(totalStats);
}
  //funcion para detectar si se encuentra el heroe en el team y setear el boton de agregar/eliminar
  const isAdded = (hero) => {
    let isInTeam = user?.heroesAdded?.find((item) => item.id === hero.id)
   
   
    if (isInTeam) {
      user?.heroesAdded?.filter(favHero => favHero.id !== hero.id)
      return true
    } else {

      return false
    }
  }

  const data = { user, login, logout, toggleAddedHeroToUser, isAdded, tercerFuncion }
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider }
export default UserContext
