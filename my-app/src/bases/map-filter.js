import { heroes } from '../data/heroes'

 export const getHeroeById = (id) => heroes.find(item => item.id === id );

//console.log(getHeroeById(2)) 

export const getHeroesByOwner = (owner) => heroes.filter(item => item.owner === owner);

//console.log(getHeroesByOwner('DC'))