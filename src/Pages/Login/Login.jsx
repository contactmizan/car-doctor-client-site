import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios'; 

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    console.log("Location:", location);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("Login Attempt:", email, password);

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log("User logged in:", loggedInUser);

                const user = { email };

                // Get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log("JWT Response:", res.data);
                        if (res.data.success) { 
                            navigate(location?.state ? location.state : '/');
                        }
                    })
                    .catch(error => console.error("JWT Error:", error));
            })
            .catch(error => console.error("Login Error:", error.message));
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mx-12">
                    <img src={img} alt="Login Illustration" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="space-y-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" required />

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" required />

                                <div className="text-right">
                                    <a className="link link-hover">Forgot password?</a>
                                </div>

                                <div className="mt-4">
                                    <input className="btn btn-neutral w-full" type="submit" value="Login" />
                                </div>
                            </div>
                        </form>

                        <p className="text-center">
                            New to Car Doctors?{' '}
                            <Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
