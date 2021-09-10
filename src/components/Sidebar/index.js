import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/Products/index' onClick={toggle}>Address: 796 Penn Ave, Pittsburgh, PA 15221</SidebarLink>
        <SidebarLink to='/'>Phone: +1 412-243-6344</SidebarLink>
        <SidebarLink to='/'>Hours: 11am - 7pm Daily</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Cash Only</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
