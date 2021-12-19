import { getHeroeById } from './map-filter'

/* const promesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const heroe = getHeroeById(2);
        reject('No se pudo encontrar el heroe')
    }, 2000);
});

promesa.then((heroe) =>{
    console.log('heroe: ', heroe)
})
.catch(err => console.warn(err)) */

const getHeroeByIdAsync = (id) =>{
   return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe)
            } else{
                reject()
            }
           
        }, 2000);
    });
}

getHeroeByIdAsync(20)
.then(console.log)
.catch(error => {
    console.log('no hay tal id')
})