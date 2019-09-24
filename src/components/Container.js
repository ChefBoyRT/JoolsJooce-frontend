import React from 'react'
import Card from './Cards'

export default function Container({ stores }) {

    const renderCards = () => {
        return stores.map(store => {
            return <Card key={store.id} store={store} />
        })
    }

    return (
        <div className='container' >
                {renderCards()}
        </div>
    )
}
