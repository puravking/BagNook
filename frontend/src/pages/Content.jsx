import React from 'react'
import Card from '../components/Card'

function Content() {
    const products = [
        {
            image: "https://picsum.photos/200",
            name: "Bag1",
            details: "A stylish leather bag with plenty of room for all your essentials.",
            price: 100,
        },
        {
            image: "https://picsum.photos/200",
            name: "Bag2",
            details: "A compact backpack perfect for daily use and quick trips.",
            price: 120,
        },
        {
            image: "https://picsum.photos/200",
            name: "Bag3",
            details: "A spacious tote bag ideal for shopping and casual outings.",
            price: 80,
        },
        {
            image: "https://picsum.photos/200",
            name: "Bag4",
            details: "A chic and elegant handbag for formal occasions.",
            price: 150,
        },
        {
            image: "https://picsum.photos/200",
            name: "Bag5",
            details: "A trendy crossbody bag that combines style and convenience.",
            price: 110,
        },
        {
            image: "https://picsum.photos/200",
            name: "Bag6",
            details: "A rugged duffle bag perfect for weekend getaways or gym sessions.",
            price: 95,
        },
        {
            image: "https://picsum.photos/200",
            name: "Bag7",
            details: "A versatile messenger bag with a modern design for work or travel.",
            price: 130,
        }
    ];
    
    return (
        <div className='flex gap-2 flex-wrap'>
            {products.map((elem)=>{
                return <div>
                    <Card elem = {elem}/>
                </div>
            })}
        </div>
    )
}

export default Content