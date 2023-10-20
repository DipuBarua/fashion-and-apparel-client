import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, image, brand_name, price, type, rating, description } = product;

    console.log(product);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand_name = form.brand_name.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedProduct = { name, image, brand_name, price, type, rating, description };
        // console.log(updateProduct);

        fetch(`https://fashion-and-apparel-server-a10b8.vercel.app/fashion/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })


        // fetch(`https://fashion-and-apparel-server-a10b8.vercel.app/fashion/${_id}`, {
        //     method: "PUT",
        //     headers: {
        //         'content-type': "application/json"
        //     },
        //     body: JSON.stringify(updateProduct)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        // if (data.modifiedCount > 0) {
        //     Swal.fire({
        //         title: 'Update Successful',
        //         text: 'successfully updated your product',
        //         icon: 'success',
        //         confirmButtonText: 'Cool'
        //     })
        // }
        //     })

    }

    return (
        <div className=" min-h-screen border bg-yellow-50">
            <div className="hero-content flex-col">
                <p className=" text-3xl text-center font-bold">Update Product</p>
                <div className="card flex-shrink-0 w-2/3 shadow-2xl md:bg-yellow-200">
                    <form onSubmit={handleUpdate} className=" md:card-body">
                        <div className=" grid md:grid-cols-2 gap-5">
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="product name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="url" name="image" defaultValue={image} placeholder="product image url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <input type="text" name="brand_name" defaultValue={brand_name} placeholder="Brand Name" className="input input-bordered" />
                                </div>
                            </div>

                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" defaultValue={price} placeholder="Product Price" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <select name="type" defaultValue={type} className="select select-bordered">
                                        <option disabled value="DEFAULT">Product type</option>
                                        <option>Clothes</option>
                                        <option>Shoes</option>
                                        <option>Cap</option>
                                        <option>Wallet</option>
                                        <option>Accessories jewelry</option>
                                        <option>Leather accessories</option>
                                        <option>Watch</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <select name="rating" defaultValue={rating} className="select select-bordered">
                                        <option disabled value="DEFAULT">select rating</option>
                                        <option>5 Stars</option>
                                        <option>4 Stars</option>
                                        <option>3 Stars</option>
                                        <option>2 Stars</option>
                                        <option>1 Star</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" defaultValue={description} name="description" placeholder="Short description" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-warning border border-black">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;