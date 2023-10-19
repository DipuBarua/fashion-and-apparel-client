import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const details = useLoaderData();
    console.log(details.name);

    // const handleDetails = () => {
    //     fetch(`http://localhost:5000/fashion/${}`, {

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }
    return (
        <div className="card w-96 glass">
            <figure><img src={details.image} alt="product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{details.name}</h2>
                <p>{details.type}</p>
                <p>{details.description}</p>
                <p>{details.price}</p>
                <p>{details.rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;