import React, {useState} from 'react'
import loginImage from '../assets/login.svg'
import {Link} from 'react-router-dom';

const Login = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='container text-center'>
            <div className="contact shadow">
                        <h2>Welcome back</h2>
                        <form> 
                            <div className="form-floating mb-3">
                             <input type="email" className="form-control shadow" id="floatingInput" placeholder="name@example.com"  onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        required='required'
                                        type='text'    
                                        placeholder='Email'/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control shadow" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        required='required'
                                        type='password' 
                                        placeholder='Password' />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <button type="submit" className="btn auth-btn cbtn" > LOGIN </button>

                        </form>

                        <p className="h6">
                            Don't have an account?
                            <Link to="/register"> Register </Link>
                        </p>
                    </div>
                    </div>
    );
}

export default Login