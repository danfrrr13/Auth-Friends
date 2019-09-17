import React , { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../utils/axiosWithAuth';
import FriendForm from '../FriendForm/';

const Friends = props => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        getData();
    },[]);
    const getData = async () => {
        try {
            const response = await axiosWithAuth().get('/friends');
            console.log(response);
            setFriends(response.data);
        } catch (err) {
            console.log('Error: ', err)
        }
    };
    return (
        <div>
            {friends.map(friend => (
                <>
                <h3>{friend.name}</h3>
                <h4>{friend.age}</h4>
                <p>{friend.email}</p>
                </>
            ))}
            <FriendForm setFriends={setFriends} />
        </div>
    );
};

export default Friends;