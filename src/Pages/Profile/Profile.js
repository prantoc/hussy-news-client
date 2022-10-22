import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const nameRef = useRef(user.displayName);
    const profileUpdate = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
    }
    return (
        <>
            <div className='col-lg-8 col-11 mx-auto border p-5 rounded' style={{ boxShadow: "rgb(204 225 255) -7px 13px 4px 1px" }}>
                <form onSubmit={profileUpdate}>
                    {/* {successMgs && <Alert variant="success">
                        {successMgs}
                    </Alert>} */}
                    {/* {errorMgs && <Alert variant="danger">
                        {errorMgs}
                    </Alert>} */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Full name</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" name='name' required placeholder='Enter your full name' ref={nameRef} defaultValue={user?.displayName ? user?.displayName : 'no data found'} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPhoto" className="form-label">Photo URL</label>
                        <input type="text" className="form-control" id="exampleInputPhoto" aria-describedby="photohelp" name='photo' required placeholder='Enter your photo URL' defaultValue={user?.photoURL ? user?.photoURL : 'no data found'} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input readOnly type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required placeholder='Enter your email' defaultValue={user?.email ? user?.email : 'no data found'} />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' required placeholder='Enter your password' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" name='confirmPassword' required placeholder='Enter your confir passowrd' />
                    </div> */}
                    <button type="submit" className="btn btn-primary text-center col-12  rounded">
                        Update Profile
                    </button>
                </form>
            </div>
        </>
    );
};

export default Profile;