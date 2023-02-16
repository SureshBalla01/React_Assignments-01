import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react';


function SingleCard() {

    const[cal,setCal] = useState(0);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        setCal(()=>count*1);
    },[count])

    return(
        <Card.Group>
        <Card onClick={()=>setCount((p)=>p+1)}>
          <Card.Content>
            <Image
              floated='right'
              src='https://contentstatic.techgig.com/photo/84677604/5-reasons-to-use-python-programming-language-for-web-app-development.jpg?237359'
            />
            <Card.Header> Learn Python: The Complete python Programming Course</Card.Header>
            <Rating icon='star' defaultRating={3} maxRating={5} />
            <Card.Description>
            <strong> Rs: 699/- </strong>
            </Card.Description>
            <Card.Description> Best Seller 
            </Card.Description>
            <Card.Description> User Visited this course {cal} 
            </Card.Description>
          </Card.Content>
        </Card>
    
        <Card onClick={()=> navigate('/home')}>
          <Card.Content>
            <Image
              floated='right'
              src='https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png'
            />
            <Card.Header>The CompleteCourse Of CSS and HTML5</Card.Header>
            <Rating icon='star' defaultRating={4} maxRating={5} />
            
            <Card.Description>
            <strong> Rs: 399/- </strong>
            </Card.Description>
          </Card.Content>
         
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated='right'
              src='https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36'
            />
            <Card.Header>Complete Guide About Angular JS 2023 </Card.Header>
            <Rating icon='star' defaultRating={3} maxRating={5} />
            <Card.Description>
             Rs: 499/-
            </Card.Description>
            <Card.Description> Best Seller 
            </Card.Description>
          </Card.Content>
        </Card>
    
        <Card>
          <Card.Content>
            <Image
              floated='right'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
            />
            <Card.Header>Complete Guide About ReactJs </Card.Header>
            <Rating icon='star' defaultRating={3} maxRating={5} />
            <Card.Description>
             Rs: 599/-
            </Card.Description>
          </Card.Content>
        </Card>
        
      </Card.Group>

    );
}

export default  SingleCard;
