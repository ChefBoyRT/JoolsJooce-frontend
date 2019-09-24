import React from 'react'

export default function JuiceCard({ juice }) {
    return (
        <div>
            <img className='juice-pic' src='https://cdn2.iconfinder.com/data/icons/vape/100/01-512.png' alt='vape juice' />
            <h2>{juice.name} - ${juice.price}</h2>
            <h4>{juice.description}</h4>
        </div>
    )
}
