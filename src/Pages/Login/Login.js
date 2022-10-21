import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <section className='container my-5'>
                <div className="row">
                    <div className='col-lg-8 col-10 mx-auto border p-5 rounded' style={{ boxShadow: "rgb(204 225 255) -7px 13px 4px 1px" }}>
                        <form >
                            <h1 className='text-center pb-4'>Login</h1>
                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
                            </div>
                            <button type="submit" className="btn btn-primary text-center col-12  rounded">
                                Login
                            </button>
                        </form>
                        <div className="form-text text-center p-1">New to Hussy-Portal? <Link to="/signup">Create new Acoount</Link></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;