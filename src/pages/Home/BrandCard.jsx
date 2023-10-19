
import { Link } from "react-router-dom";


const BrandCard = ({ card }) => {
    const { brand_image, brand_name } = card;

    return (
        <Link to={`/productCollection/${brand_name}`}>
            <div className=" m-10 h-1/2 flex bg-yellow-100 shadow-xl  items-center justify-start">
                <div className=" flex-1">
                    <figure><img className=" w-2/3" src={brand_image} alt="Album" /></figure>
                </div>

                <div className=" flex-1 bg-gradient-to-l from-yellow-500 ">
                    <h2 className=" text-5xl py-16 font-bold md:ml-72 ">{brand_name}</h2>
                </div>
            </div>

        </Link>
    );
};

export default BrandCard;