import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id,name,phone,website,address} = props.friend;
    const history = useHistory();
    const friendStyle ={
        border:`3px solid gray`,
        padding:'10px',
        backgroundColor:'lightgray'
    }
    const handleFriendClick = () =>{
         history.push(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h1>I am :{name} id: {id}</h1>
            <h2>Phone Number is:{phone}</h2>
            <h3>Website:{website}</h3>
            <h4>Address:{address.city}</h4>
            <Link to={`/friend/${id}`}>Visit me</Link>
            <br />
            <Link to={`/friend/${id}`}>
               <button>Visit me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;