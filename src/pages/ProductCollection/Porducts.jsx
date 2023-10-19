import { Link } from "react-router-dom";

const Porducts = ({ product }) => {
    const { _id, name, image, brand_name, price, type, rating, description } = product;
    console.log(product);



    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="product_image" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{rating}</div>
                </h2>
                <div className=" flex items-start justify-between">
                    <div>
                        <p>Product: {type}</p>
                        <p>Price: {price} BDT.</p>
                    </div>
                    <div>
                        <kbd className="kbd kbd-sm bg-black text-white">{brand_name}</kbd>
                    </div>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/productDetails/${_id}`}>
                        <div className="badge badge-outline">Details</div>
                    </Link>
                    <Link to={`/updateProduct/${_id}`}>
                        <div className="badge badge-outline">Update</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Porducts;