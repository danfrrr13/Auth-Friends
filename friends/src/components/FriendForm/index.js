import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const FriendForm = props => {
  const [friend, setFriend] = useState({
      name: '',
      age: '',
      email: ''
  });
  const handleChange = e => {
    setFriend({
        ...friend,
        [e.target.name]: e.target.value
    });
  };

//   const submit = async e => {
//     e.preventDefault();
//     try {
//         const response = axiosWithAuth().post('/friends', friend);
//         console.log('Friend submit response: ', response);
//         props.setFriends(response.data);
//     } catch (err) {
//         console.log('Error: ', err);
//     }
//   };

const submit = e => {
    e.preventDefault();
    axiosWithAuth().post('/friends', friend)
        .then(res => props.setFriends(res.data))
        .catch(err => console.log(err))
};
  
return (
    <div>
    <form onSubmit={submit}>
        <input
        type="text"
        name="name"
        value={friend.name}
        onChange={handleChange}
        />
        <input
        type="text"
        name="age"
        value={friend.age}
        onChange={handleChange}
        />
        <input
        type="text"
        name="email"
        value={friend.email}
        onChange={handleChange}
        />
        <input type='submit' />
    </form>
    </div>
);
  
}

export default FriendForm;