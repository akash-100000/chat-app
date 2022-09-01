import React from 'react'
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal';
import DashBoardToggle from './dashboard/DashboardToggle';

const Sidebar = () => {
  return (
    <div className='h-100 pt-2'>
        <div>
            <DashBoardToggle/>
            <CreateRoomBtnModal/>
        </div>
      bottom
    </div>
  );
};

export default Sidebar;
 