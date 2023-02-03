import React from 'react';
import {Link} from 'react-router-dom';
//import { Button, Modal } from 'semantic-ui-react';
import './SignIn.css';

const SignIn = () => {
    return(
        <div className='content' style={{marginTop:"40px"}}>
            <div className='header'><h2>Login using User Name and Password</h2></div>
            <div className='ui one column stackable center aligned page grid' style={{marginTop:"40px"}}>
            <form class = "ui form">
                <div className='field'>
                   <input type="text" name="username" placeholder='User Name or Email' />
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

export default SignIn

/*function SignIn() {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={}
    >
      <Modal.Header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="logo" />
      </Modal.Header>
      <Modal.Content>
      <form>
                    <label>Userame:
                    <input type="text" name="username"/>
                    </label>

                    <label>Email:
                    <input type="email" name="email"/>
                    </label>

                    <label>Password:
                    <input type="password" name="username"/>
                    </label>

                    <button className='ui blue button'>
                    <Link to="/home" className='signupBtn'><i class="user plus icon"/>SIGN UP</Link>
                </button>
                </form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          SIGN IN
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
*/


