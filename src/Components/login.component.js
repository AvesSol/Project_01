import React, {useState} from 'react'
import loginImage from '../assets/login.svg'
import {Link} from 'react-router-dom';

const Login = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={loginImage} alt='Login' />   
                    </div>
                    <div id='form-section'>
                        <h2>Welcome back</h2>
                        <form> 
                            <div className="input-group mb-3">   
                                <input 
                                    onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        required='required'
                                        type='text'    
                                        placeholder='Email' />
                            </div>
                            <div className="input-group mb-3">   
                                <input 
                                    onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        required='required'
                                        type='password' 
                                        placeholder='Password' />
                            </div>

                            <button type="button" className="btn btn-primary cbtn" > LOGIN </button>

                        </form>

                        <p>
                            Don't have an account?
                            <Link to="/register"> Register </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login