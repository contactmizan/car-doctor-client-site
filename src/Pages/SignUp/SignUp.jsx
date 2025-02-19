import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault(); // ✅ Fix spelling

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User created:", user);
                form.reset(); // ✅ Clear form after successful signup
            })
            .catch(error => console.log("Signup Error:", error.message));
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mx-12">
                    <img src={img} alt="Signup" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="space-y-3">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" className="input input-bordered w-full" placeholder="Name" required />

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
                                    <input className="btn btn-neutral w-full" type="submit" value="Sign Up" />
                                </div>
                            </div>
                        </form>

                        <p className="text-center">
                            Already have an account?{" "}
                            <Link className="text-orange-600 font-bold" to="/login">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
