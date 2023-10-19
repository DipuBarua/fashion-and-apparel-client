
import { Link } from "react-router-dom";


const BrandCard = ({ card }) => {
    const { brand_image, brand_name } = card;
    //     const [products,setProducts]=useState([]);
    // console.log(products);
    //     const handleBrand=()=>{
    //         fetch('http://localhost:5000/fashion')
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data);
    //             const remaining = data.filter(product=>product.brand_name==brand_name);
    //             setProducts(remaining);
    //             console.log(remaining);
    //         })
    //     }

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

            {/* {
                products.map(product => <Porducts
                    key={product._id}
                    product={product}
                    ></Porducts>)
                    // products={products}
                    // setProducts={setProducts}
            } */}

        </Link>
    );
};

export default BrandCard;