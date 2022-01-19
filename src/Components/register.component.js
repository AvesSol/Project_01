import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import registerImage from '../assets/register.svg'

const Register = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('male')
    const [password, setPassword] = useState('')

    
    return (
        <div className='container text-center'>
            <div className="contact shadow">
                        <h2 className="card-title">Create an Account</h2>
                        <form> 
                        <div className="form-floating mb-3">
                            <input type="name" className="form-control" id="floatingInput" placeholder="Eve " onChange={e => setFullName(e.target.value)}
                                        value={fullName}
                                        required='required'
                                        type='text'   
                                        placeholder='First name' />
                            <label for="floatingInput">Full Name</label>
                        </div>
                        <div className="form-floating mb-3">
                             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        required='required'
                                        type='text'    
                                        placeholder='Email'/>
                                <label for="floatingInput">Email Address</label>
                            </div>
                            <div className="mb-3">
                            <select className="form-select form-control">
                                <option>select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        required='required'
                                        type='password' 
                                        placeholder='Password' />
                                <label for="floatingPassword">Password</label>
                            </div>  
                            <button type="submit" className="btn auth-btn cbtn" > Register</button>
                        </form>    
                        <p className="h6">
                            Already have an account? 
                            <Link to="/login"> Login </Link>
                        </p>
                    </div>
                    </div>
        );
}


export default Register