import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ResetPassword = () => {
    const { userPassReset } = useContext(AuthContext);
    const [successMgs, setSuccessMgs] = useState('');
    const [errorMgs, setErrorMgs] = useState('');
    const resetPassword = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        userPassReset(email)
            .then(() => {
                setSuccessMgs('Password reset email sent!')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMgs(errorMessage)
            });
    }
    return (
        <>
            <div className='col-lg-8 col-10 mx-auto border p-5 rounded' style={{ boxShadow: "rgb(204 225 255) -7px 13px 4px 1px" }}>
                <form onSubmit={resetPassword}>
                    <h1 className='text-center pb-4'>Reset Password</h1>
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
                    <button type="submit" className="btn btn-primary text-center col-12  rounded">
                        Reset Password
                    </button>
                </form>
            </div>

        </>
    );
};

export default ResetPassword;