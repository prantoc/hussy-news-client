import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { userSignIn } = useContext(AuthContext);
    const [successMgs, setSuccessMgs] = useState('');
    const [errorMgs, setErrorMgs] = useState('');
    const navigate = useNavigate();
    let location = useLocation();
    const userLogin = e => {
        let from = location.state?.from?.pathname || "/";
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setErrorMgs('');
                setSuccessMgs(`Hi, You Logged in successfully ${user.displayName}`);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMgs(errorMessage);
            });
    }
    return (
        <>
            <div className='col-lg-8 col-10 mx-auto border p-5 rounded' style={{ boxShadow: "rgb(204 225 255) -7px 13px 4px 1px" }}>
                <form onSubmit={userLogin}>
                    <h1 className='text-center pb-4'>Login</h1>
                    {successMgs && <Alert variant="success">
                        {successMgs}
                    </Alert>}
                    {errorMgs && <Alert variant="danger">
                        {errorMgs}
                    </Alert>}
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" required />
                    </div>
                    <button type="submit" className="btn btn-primary text-center col-12  rounded">
                        Login
                    </button>
                </form>
                <div className="form-text text-center p-1">New to Hussy-Portal? <Link to="/signup">Create new Acoount</Link></div>
            </div>

        </>
    );
};

export default Login;