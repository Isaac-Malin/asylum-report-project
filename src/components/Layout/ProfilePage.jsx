import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = (props) => {

  const { isAuthenticated, isLoading, user } = useAuth0();

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
//need to import auth0 and make sure user is authenticated.
//next make sure profile page only renders in nav bar is the user is authenticated.
//display info on profile page to the user that is currently logged in.

export default ProfilePage;