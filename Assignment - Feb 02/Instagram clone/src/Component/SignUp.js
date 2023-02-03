import React from 'react';
import {Link} from 'react-router-dom';
//import { Button, Modal } from 'semantic-ui-react';
import './SignIn.css';

const SignUp = () => {
    return(
        <div className='content'style={{marginTop:"40px"}}>
            <div className='header' > <h2>Signup to see Photos and videos from Your friends.</h2></div>
            <div className='ui one column stackable center aligned page grid' style={{marginTop:"40px"}}>
            <form class = "ui form">
                <div className='field'>
                    <div className='two fields'>
                        <div className='field'>
                        <input type="text" name="fname" placeholder='First Name' />
                        </div>

                        <div className='field'>
                        <input type="text" name="lname" placeholder='Last Name' />
                        </div>

                    </div>
                </div>

                <div className='field'>
                   <input type="email" name="mail" placeholder='Email' />
                </div>

                <div class="field">
                    <select multiple="" class="ui dropdown">
                        <option value="">Gender</option>
                        <option value="1">Male</option>
                        <option value="0">Female</option>
                    </select>
                </div>


                <div className='field'>
                   <input type="Password" name="password" placeholder='Password' />
                </div>

                <button className = 'ui blue button' id="signinBtn">
                <Link to="/signin" className='signInBtn'>SIGN IN</Link>
                </button>
            </form>

            </div>
        </div>
    )
}

export default SignUp