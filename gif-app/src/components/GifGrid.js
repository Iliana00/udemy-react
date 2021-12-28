import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GiFGridItem } from './GiFGridItem';


export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);
    

    /* const [images, setImages] = useState([])
    
    useEffect(() =>{
        getGifs(category)
        .then(images => setImages(images))
    }, [category]) */


   

    //getGifs();

    return (
        <>

        <h3>{ category }</h3>

        { loading && <p>'Cargando...' </p> }
        <h3>{category}</h3>  
        <div className='card-grid'>                                  
                {
                    images.map( image =>(
                        //<li key={ image.id } > { image.title }</li>
                        <GiFGridItem 
                        key={ image.id }
                        {...image}
                        //image={image}
                         />
    ))
                }                       
        </div> 
        </>
        
    )
}
