import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";

const Register = () => {
    const { signUp } = useContext(AuthContext);
    const [regError, setRegError] = useState(null);
    const [regSuccess, setRegSuccess] = useState(null);

    const handleRegister = event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget)

        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");

        console.log(name, email, password);

        // reset error msg 
        setRegError('');
        setRegSuccess('');

        // password restriction 
        if (password.length < 6) {
            setRegError('Password should be at least Six(6) characters or more longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegError('Password should have at least One Upper Case character.');
            return;
        }
        else if (!/[@$!%*#?&]/.test(password)) {
            setRegError('Password should have at least One Special Character( @ $ ! % * # ? & ).');
            return;
        }

        // call signUp 
        signUp(email, password, name)
            .then(result => {
                console.log(result.user);
                setRegSuccess("Register Successful")
            })
            .catch(error => {
                console.log(error);
                setRegError(error.message);
            })


    }
    return (

        <div className="max-w-2xl mx-auto min-h-screen">
            <div className="hero-content flex-col ">
                <p className=" text-5xl font-bold">Please Register</p>
                <div className="card flex-shrink-0 w-full border border-black">
                    <form onSubmit={handleRegister} className="card-body">
                        <p className=" text-center text-green-500">{regSuccess}</p>
                        <p className=" text-center text-red-600">{regError}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Please set a password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <p>If you have an account, please
                                <Link to={'/login'} className=" btn-link" >Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;