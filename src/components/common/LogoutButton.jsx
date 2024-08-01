import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { colors } from '../../styles/data_vis_colors';

const { primary_accent_color } = colors;

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      style={{ background: primary_accent_color, border: 'none', color: '#E2F0F7', marginLeft: '75px', cursor: 'pointer'}}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;