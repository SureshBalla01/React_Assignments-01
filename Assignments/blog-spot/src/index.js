import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './Images/1.png';
import SingleComment from './SingleComment';
import UserCard from './UserCard';


const App = function() {
  return (
    <div className='ui-comments'>
      <UserCard>
      <SingleComment
      name="Rahul"
      text="Reactjs"
      date="Today at 6:00 PM"
      picture={img1}/>
      </UserCard>
      
      <UserCard>
      <SingleComment
      name="suresh"
      text="Reactjs"
      date="Today at 6:00 PM"
      picture={img1}/>
      </UserCard>

      <UserCard>
      <SingleComment
      name="Henry"
      text="Reactjs"
      date="Today at 6:00 PM"
      picture={img1}/>
      </UserCard>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)