import React from 'react';
import { useCounterFetch } from '../../Hooks/useCounterFetch';
import { useFetch } from '../../Hooks/useFetch';
import '../02-useEffect/effects.css'


export const MultipleCustomHooks = () => {

    const {state, increment} = useCounterFetch(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`)
    //console.log(state)
    const {author, quote} = !!data && data[0]
    //console.log(author, quote)

    
    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr/>

            { 
            loading ? (
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
            )
            :
            (
            <blockquote className='blockquote text-right'>
                <p className='mb-2'> {quote} </p>
                <footer className='blockquote-footer'> {author} </footer>
            </blockquote>
            )
        }

        <button 
        onClick={increment}
        className='btn btn-primary'>
            Siguiente quote
        </button>
            
            
        </div>
    )
}
