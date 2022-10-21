import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <section className='container my-5'>
                <div className="row">
                    <div className='col-lg-4 col-11 mx-auto border p-5 rounded' style={{ boxShadow: "-7px 13px 4px 1px #fad193" }}>
                        <form>
                            <h1 className='text-center pb-4'>SignUp</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Full name</label>
                                <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" name='name' required placeholder='Enter your full name' />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required placeholder='Enter your email ' />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name='password' required placeholder='Enter your password' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" name='confirmPassword' required placeholder='Enter your confir passowrd' />

                            </div>
                            <button type="submit" className="btn-color text-center col-12  rounded">
                                SignUp
                            </button>
                        </form>
                        <div className="form-text text-center p-1">Have an account in Ema-Jhon? <Link to="/login" style={{ color: "#f90" }}>Login</Link></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;