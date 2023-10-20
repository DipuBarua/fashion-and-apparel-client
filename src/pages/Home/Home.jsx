import { useEffect, useState } from "react";
import Banner from "./Banner";
import BrandCard from "./BrandCard";
import ClientReview from "./ClientReview";
import Partner from "./Partner";

const Home = () => {
    
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCards(data);
            })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <p className=" text-5xl text-center font-bold bg-gray-300 py-10">Fashion and Apparel</p>
            <div className=" flex flex-col gap-10">
                {
                    cards.map(card => <BrandCard key={card.id} card={card}></BrandCard>)
                }
            </div>
            <ClientReview></ClientReview>
            <Partner></Partner>

            

        </div>
    );
};

export default Home;