const getHero = async () => {
    const url = "https://www.superheroapi.com/api/105694171870518/22";
    const res = await fetch(url);
    const hero = await res.json();
    console.log(hero);

    return hero;
}

export default getHero;