import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return(
        <nav className='ui raised padded segment'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="logo" />
            <div className='ui right floated header'>
                <Link to="/home"><i class=" large black home icon"></i></Link>
                <Link to="/chat"><i class="large black facebook messenger icon "/></Link>
                <Link to="/upload"><i class="large black upload icon"/></Link>
                <Link to="/profile"><i class=""/></Link>
                <button className='ui button'>
                    <Link to="/signIn"><i class="sign in icon"/>SIGN IN</Link>
                </button>

                <button className='ui button'>
                    <Link to="/signUp"><i class="person add out lined icon"/>SIGN UP</Link>
                </button>
            </div>
        </nav>
    )
}
export default Navbar