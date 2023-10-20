import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [signInErrorMsg, setSignInErrorMsg] = useState(null);
    const [signInSuccess, setSignInSuccess] = useState(null);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // reset error msg 
        setSignInErrorMsg('');
        setSignInSuccess('');

        // call Login auth 
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setSignInSuccess('Login Successful');
            })
            .catch(error => {
                console.error(error.message);
                setSignInErrorMsg(error.message);
            })

    }
    return (
        <div className="bg-base-200">
            <div className=" max-w-2xl mx-auto min-h-screen">
                <div className="hero-content flex-col ">
                    <p className=" text-5xl font-bold">Please Login</p>
                    <div className="card flex-shrink-0 w-full bg-base-100 shadow-xl ">
                        <form onSubmit={handleLogin} className="card-body">
                            <p className=" text-red-600 font-medium text-center">{signInErrorMsg}</p>
                            <p className=" text-green-500 font-medium text-center">{signInSuccess}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className=" border border-black p-2 ml-1">
                                    Do not have an account? please
                                    <Link className=" btn-link ml-1" to={'/register'}>Sign up</Link>
                                </p>

                                {/* <p className=" text-center">OR</p> */}

                                {/* <p className=" border border-black p-2 ml-1">Continue with
                                    <button className=" btn-link ml-1" onClick={handleGoogleSignIn}>Google</button>
                                </p> */}

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;