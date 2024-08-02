import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../CSS/ProfilePage.css';

const ProfilePage = (props) => {

  const { isLoading, user } = useAuth0();

  console.log(user);

  if(isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className='userInfo-container'>
      <h1 className='headline'>User Information</h1>
      <h3 className='user-name'>{user.name}</h3>
      <p className='user-email'>{user.email}</p>
      <img className='user-picture' src={user.picture} alt="profile pic" />
    </div>
  );
};
//need to import auth0 and make sure user is authenticated.
//next make sure profile page only renders in nav bar is the user is authenticated.
//display info on profile page to the user that is currently logged in.

export {ProfilePage};