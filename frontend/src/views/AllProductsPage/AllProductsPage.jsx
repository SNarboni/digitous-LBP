import React from 'react'

const AllProductsPage = ({match}) => {
    return (
        <div>
            <h1>
            AllProductsPage
            </h1>
            <p>{match.params.city}</p>
        </div>
    )
}

export default AllProductsPage
