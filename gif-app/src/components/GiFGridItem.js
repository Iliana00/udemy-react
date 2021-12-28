import React from 'react'


export const GiFGridItem = ({ title, url}) => {

    //console.log(id, title, url)
    return (
        <div className='card animate__animated animate__bounce animate__delay5s'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
