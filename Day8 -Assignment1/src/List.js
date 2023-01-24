import React, {useState} from 'react';
import { FaRegWindowClose} from "react-icons/fa";

const List = ({ peoplelist }) => {
  const [data,setData]= useState(peoplelist)
  const deletePeople = (id) => {
    let newList = data.filter((people)=>{return people.id !== id})
    console.log(newList);
    setData(newList);
  }
  return (
    <>
      {data.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <span><FaRegWindowClose onClick={()=>{deletePeople(id)}} id={id} /></span>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
