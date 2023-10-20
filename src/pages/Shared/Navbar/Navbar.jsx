import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contextProvider/AuthProvider";
import { FaUserSecret } from 'react-icons/fa6';


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    // call log out 
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log('log out:', result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }

    const NavLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        {
            user ? <>
                <li><Link to={'/addProduct'}>Add Product</Link></li>
                <li><Link to={'/myCart'}>My Cart</Link></li>
            </> :
                <li><Link to={'/register'}>Register</Link></li>

        }
    </>
    return (
        <div className="navbar bg-yellow-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-2">
                        {NavLinks}
                    </ul>
                </div>
                <img src="https://i.ibb.co/S364gbq/Red-Minimalist-Fashion-Woman-Free-Logo-1.png" alt="" />
                {/* <a className="btn btn-ghost normal-case text-xl">Fashion and Apparel</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="flex flex-col items-center p-1 mr-3  rounded-xl bg-orange-300">
                                <FaUserSecret className=" text-2xl text-black"></FaUserSecret>
                                <p>{user.email}</p>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-outline">Log Out</button>
                        </>
                        :
                        <Link to={"/login"}><button className="btn btn-warning">Log in</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;