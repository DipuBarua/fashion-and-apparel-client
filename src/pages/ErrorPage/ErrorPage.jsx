
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className=" text-center my-10 space-y-2">
            <h1>Opps!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div className=" font-semibold p-5">
                    <h3>Error:{error.status}</h3>
                    <h3>not found page</h3>
                </div>
            }
            <span>Go Back </span>
            <Link to={'/'}><button className="btn btn-outline ml-2">Home</button></Link>
        </div>
    );
};

export default ErrorPage;