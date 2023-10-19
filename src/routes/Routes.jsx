import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import ProductCollection from "../pages/ProductCollection/ProductCollection";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <></>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/productCollection/:brand_name",
                element: <ProductCollection></ProductCollection>,
                loader: ({ params }) => fetch(`http://localhost:5000/fashion/${params.brand_name}`)
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>
            }
        ]
    },
]);


export default routes;