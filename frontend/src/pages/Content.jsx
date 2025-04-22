import React from 'react'
import Card from '../components/Card'
function Content() {
    const products = [
        {
            image: "https://static2.goldengoose.com/public/Style/ECOMM/GWA00468.A000738-90100.jpg?im=Resize=(1200)",
            name: "Golden Goose Small Venezia Bag",
            details: "A stylish black leather handbag adorned with a chic, detachable silk scarf and a golden heart charm, offering a touch of sophistication.",
            price: "100",
        },
        {
            image: "https://cdn.shopify.com/s/files/1/2986/1172/files/everyday-backpack-black-20-1.jpg?v=1725404905&width=1000&height=1000&crop=center",
            name: "Peak Design Everyday Backpack",
            details: "An award-winning backpack designed for everyday and photo carry, featuring quick top access, weatherproof zippers, and a sleek design.",
            price: "120",
        },
        {
            image: "https://media.istockphoto.com/id/1801926955/photo/eco-friendly-white-colour-fashion-canvas-tote-bag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9MrP2N7F4dpZyUIuNM9SAuJZE2bnTHTupRjWA7qRgLs=",
            name: "Large Tote Bag on iStock",
            details: " versatile and spacious tote bag, perfect for shopping and casual outings, crafted from eco-friendly materials.",
            price: 80,
        },
        {
            image: "https://i.etsystatic.com/23655784/r/il/59b38c/5994582512/il_600x600.5994582512_jtkr.jpg",
            name: "Elegant Evening Bag on Etsy",
            details: "A chic and elegant handbag, ideal for formal events, featuring intricate designs and high-quality craftsmanship.",
            price: 150,
        },
        {
            image: "https://media.istockphoto.com/id/1438966165/photo/men-leather-sling-bag-is-on-person.jpg?s=612x612&w=0&k=20&c=rwwBumEOYZk2O2GQZCRfaMHGpGTI8kmUTembzFqm4bc=",
            name: "Trendy Crossbody Bag",
            details: "A fashionable crossbody bag that combines style and convenience, suitable for various occasions.",
            price: 110,
        },
        {
            image: "https://i.etsystatic.com/18978089/r/il/fd8fe3/5605207622/il_600x600.5605207622_s9d6.jpg",
            name: "Rugged Duffle Bag for Weekend Getaways",
            details: "A durable and spacious duffle bag, perfect for weekend trips or gym sessions, offering both style and functionality.",
            price: 95,
        },
        {
            image: "https://cdn.packhacker.com/2023/10/70b8bf5a-featured-best-messenger-bag-v2.jpg?auto=compress&auto=format&w=960&h=640&fit=crop",
            name: "Best Messenger Bags on Pack Hacker",
            details: "A modern and versatile messenger bag, designed for work or travel, featuring ample storage and a sleek look.",
            price: 130,
        },{
            image: "https://static2.goldengoose.com/public/Style/ECOMM/GWA00468.A000738-90100.jpg?im=Resize=(1200)",
            name: "Golden Goose Small Venezia Bag",
            details: "A stylish black leather handbag adorned with a chic, detachable silk scarf and a golden heart charm, offering a touch of sophistication.",
            price: "100",
        },
        {
            image: "https://cdn.shopify.com/s/files/1/2986/1172/files/everyday-backpack-black-20-1.jpg?v=1725404905&width=1000&height=1000&crop=center",
            name: "Peak Design Everyday Backpack",
            details: "An award-winning backpack designed for everyday and photo carry, featuring quick top access, weatherproof zippers, and a sleek design.",
            price: "120",
        },
        {
            image: "https://media.istockphoto.com/id/1801926955/photo/eco-friendly-white-colour-fashion-canvas-tote-bag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9MrP2N7F4dpZyUIuNM9SAuJZE2bnTHTupRjWA7qRgLs=",
            name: "Large Tote Bag on iStock",
            details: " versatile and spacious tote bag, perfect for shopping and casual outings, crafted from eco-friendly materials.",
            price: 80,
        },
        {
            image: "https://i.etsystatic.com/23655784/r/il/59b38c/5994582512/il_600x600.5994582512_jtkr.jpg",
            name: "Elegant Evening Bag on Etsy",
            details: "A chic and elegant handbag, ideal for formal events, featuring intricate designs and high-quality craftsmanship.",
            price: 150,
        },
        {
            image: "https://media.istockphoto.com/id/1438966165/photo/men-leather-sling-bag-is-on-person.jpg?s=612x612&w=0&k=20&c=rwwBumEOYZk2O2GQZCRfaMHGpGTI8kmUTembzFqm4bc=",
            name: "Trendy Crossbody Bag",
            details: "A fashionable crossbody bag that combines style and convenience, suitable for various occasions.",
            price: 110,
        },
        {
            image: "https://i.etsystatic.com/18978089/r/il/fd8fe3/5605207622/il_600x600.5605207622_s9d6.jpg",
            name: "Rugged Duffle Bag for Weekend Getaways",
            details: "A durable and spacious duffle bag, perfect for weekend trips or gym sessions, offering both style and functionality.",
            price: 95,
        },
        {
            image: "https://cdn.packhacker.com/2023/10/70b8bf5a-featured-best-messenger-bag-v2.jpg?auto=compress&auto=format&w=960&h=640&fit=crop",
            name: "Best Messenger Bags on Pack Hacker",
            details: "A modern and versatile messenger bag, designed for work or travel, featuring ample storage and a sleek look.",
            price: 130,
        },
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