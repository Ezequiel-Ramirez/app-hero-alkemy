import React, { createContext, useState } from 'react';

const UserContext = createContext();

const initialUser = { id: 1, name: "Alkemy", heroesAdded: [] }

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(initialUser);
  const [intelligenceTeam, setIntelligenceTeam] = useState("");
  const [strengthTeam, setStrengthTeam] = useState("");
  const [speedTeam, setSpeedTeam] = useState("");
  const [durabilityTeam, setDurabilityTeam] = useState("");
  const [powerTeam, setPowerTeam] = useState("");
  const [combatTeam, setCombatTeam] = useState("");
  const [heightTeam, setHeightTeam] = useState("");
  const [weightTeam, setWeightTeam] = useState("");

  const calculatePowerstats =()=> {
    let intelligence = 0;
    let strength = 0;
    let speed = 0;
    let durability = 0;
    let power = 0;
    let combat = 0
    let height = 0;
    let weight = 0;
    for(const hero of user.heroesAdded) {
      if(isNaN(parseInt(hero?.powerstats?.intelligence))) {
      } else {
        intelligence += parseInt(hero?.powerstats?.intelligence)
      }
      if(isNaN(parseInt(hero?.powerstats?.speed))) {} else {
        speed += parseInt(hero?.powerstats?.speed)
      }
      if(isNaN(parseInt(hero?.powerstats?.durability))) {}else {
        durability += parseInt(hero?.powerstats?.durability)
      }
      if(isNaN(parseInt(hero?.powerstats?.strength))) {} else {
        strength += parseInt(hero?.powerstats?.strength)
      }
      if(isNaN(parseInt(hero?.powerstats?.power))) {} else {
        power += parseInt(hero?.powerstats?.power)
      }
      if(isNaN(parseInt(hero?.powerstats?.combat))) {} else {
        combat += parseInt(hero?.powerstats?.combat)
      }
     
        height = parseInt((height + parseInt(hero?.appearance?.height[1])));
      
     
        weight = parseInt((weight + hero?.appearance?.weight[1]) );
      
    }
    setIntelligenceTeam(intelligence);
    setStrengthTeam(strength);
    setSpeedTeam(speed);
    setDurabilityTeam(durability);
    setPowerTeam(power);
    setCombatTeam(combat);
    setHeightTeam(height/user.heroesAdded.length);
    setWeightTeam(weight/user.heroesAdded.length);
    
  }




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
  }
const tercerFuncion = (hero) =>{
 
  
  toggleAddedHeroToUser(hero);
  calculatePowerstats();
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

  const data = { user, login, logout, toggleAddedHeroToUser, isAdded, tercerFuncion, intelligenceTeam, strengthTeam, speedTeam, durabilityTeam, powerTeam, combatTeam, heightTeam, weightTeam, calculatePowerstats}
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider }
export default UserContext
