import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuList from './menuList';

const MenuDraw = (props) => {
  return (
    <div>
      <Drawer open={props.showMenu} onClose={props.handleToggleMenu}>
        <div
          tabIndex={0}
          role="button"
          onClick={props.handleToggleMenu}
          onKeyDown={props.handleToggleMenu}
        >
          <MenuList />
        </div>
      </Drawer>
    </div>
  );
}

export default MenuDraw;