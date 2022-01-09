import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import { useState } from 'react';

export const Message = () => {

    const [coors, setCoors] = useState({x:0, y:0})
    const {x, y} = coors

   /*  useEffect(() => {
        console.log('componente montado')
        return () => {
            console.log('componente desmontado')
        }
    }, []) */

    useEffect(() => {

        const mouseMove = (e)=>{
           const coors = { x: e.x, y : e.y}
          setCoors(coors)            
        }

        window.addEventListener('mousemove', mouseMove )

        return () => {
            window.removeEventListener('mousemove', mouseMove)
                      
        }
    }, [])

    return (
        <>
          <h3>Eres genial</h3>  
          <p>
             x:{ x } y:{ y }
          </p>
        </>
    )
}
