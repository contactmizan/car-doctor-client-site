import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const Login = () => {
    const handlelogin = e => {
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
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handlelogin} action="">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <div className=''>
                                    <input className="btn btn-neutral mt-4 w-full" type="submit" name='password' value="Login" />
                                </div>
                            </fieldset>
                        </form>
                        <p className='text-center'>New to Car Doctors? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;