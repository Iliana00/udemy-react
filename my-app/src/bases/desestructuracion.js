/* eslint-disable react-hooks/rules-of-hooks */
/*
La desestructuración la haces directamente o también cuando 
la pasas directamente puede ser ya desestructurada
*/
 /*const persona = {
     nombre: 'tony',
     edad: 45,
     clave: 'ironman'
 }

 const { nombre, edad, clave } = persona

console.log(nombre)
console.log(edad)
console.log(clave) */
/* const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman'
}
const retornaPersona = ({nombre}) =>{
    console.log(nombre)
}

retornaPersona(persona)
 */
const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman'
}

const useContext = ({clave, nombre, edad}) =>{
    return{
        nombreClave: clave,
        aniios: edad,
        latLng:{
            lat: 14.1232,
            lng: -12.32
        }
    }
}
const {nombreClave, aniios, latLng:{lat,lng}} = useContext(persona);
console.log(nombreClave, aniios, lat, lng)