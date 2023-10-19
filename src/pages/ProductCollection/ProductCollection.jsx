import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Porducts from "./Porducts";
// import Porducts from "./Porducts";

// import { useState } from "react";


const ProductCollection = () => {
    const loadedProducts = useLoaderData();
    console.log(loadedProducts);
    const [allProduct, setAllProduct] = useState(loadedProducts);

    // const handleBrand = () => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }


    return (
        <div className=" grid md:grid-cols-3 md:gap-12 m-10">
            {
                allProduct.map(product => <Porducts key={product._id} product={product}></Porducts>)
            }
        </div>
    );
};

export default ProductCollection;