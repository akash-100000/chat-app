import React from 'react';
import {Avatar} from 'rsuite';
import { getNameInitials } from '../misc/helpers';

const ProfileAvatar = ({name, ...avatarprops}) => {
  return (
   <Avatar circle {...avatarprops}>{getNameInitials}</Avatar>
  )
}

export default ProfileAvatar
