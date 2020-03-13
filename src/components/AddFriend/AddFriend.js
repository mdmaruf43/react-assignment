import React from 'react'

const AddFriend = (props) => {
    const addFriends = props.friendsInfomation;
    return (
        <div>
            <h3>Total Added Friends: {addFriends}</h3>
        </div>
    )
}

export default AddFriend;