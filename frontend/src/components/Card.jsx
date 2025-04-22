import React from 'react'

function Card({ elem }) {
    const { image, price, details, name } = elem;
    return (
        <div className="h-96 w-72 flex flex-col p-4 m-4 border rounded-lg shadow-lg">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-lg">{name}</p>
                <p className="text-xl font-bold text-green-600">${price}</p>
            </div>
            <p className="text-sm text-gray-700">{details}</p>
        </div>
    )
}

export default Card
