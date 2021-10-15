import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import registerImage from '../assets/register.svg'

const Register = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('male')
    const [password, setPassword] = useState('')

    
    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt='Register' />   
                    </div>
                    <div id='form-section'>
                        <h2 class="card-title">Create an account</h2>
                        <form> 
                            <div class="input-group mb-3">   
                                <input 
                                    onChange={e => setFirstName(e.target.value)}
                                        value={firstName}
                                        required='required'
                                        type='text'   
                                        placeholder='First name' />
                            </div>
                            <div class="input-group mb-3">   
                                <input 
                                    onChange={e => setLastName(e.target.value)}
                                        value={lastName}
                                        required='required'
                                        type='text'   
                                        placeholder='Last name' />
                            </div>
                            <div class="input-group mb-3">   
                                <input 
                                    onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        required='required'
                                        type='text'   
                                        placeholder='Email' />
                            </div>
                            <div class="input-group mb-3"> 
                                <select 
                                    onChange={e => setGender(e.target.value)}
                                        value={gender}
                                        required='required'  
                                        > 
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">   
                                <input 
                                    onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        required='required'
                                        type='password'   
                                        placeholder='Password' />
                            </div>   
                            <button type="button" className="btn btn-primary cbtn" > Register</button>
                        </form>    
                        <p>
                            Already have an account? 
                            <Link to="/login"> Login </Link>
                        </p>
                    </div>
                </div>
            </div>            
        </div>
        );
}


export default Register