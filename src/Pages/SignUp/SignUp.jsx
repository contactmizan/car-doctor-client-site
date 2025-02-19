import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const SignUp = () => {
    const handleSignUp
        = e => {
            e.preveDefault();
        }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mx-12">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp
                        } action="">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="email" name='name' className="input" placeholder="Name" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="fieldset-label">Confirm Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <div className=''>
                                    <input className="btn btn-neutral mt-4 w-full" type="submit" name='password' value="Sign Up" />
                                </div>
                            </fieldset>
                        </form>
                        <p className='text-center'>Already have an account? Please <Link className='text-orange-600 font-bold' to="/login">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;