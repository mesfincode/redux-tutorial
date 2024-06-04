// import React from "react";
import * as React from "react";

import Drawer from "@mui/material/Drawer";

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (

    <div className="bg-slate-400  h-full flex gap-4 flex-col pt-8 px-4  w-[250px] ">
       <a href="/" className="bg-blue-400 px-4 py-2 rounded-lg w-full">Home</a>
       <a href="/" className="bg-blue-400 px-4 py-2 rounded-lg w-full">About</a>
    </div>
  );

  return (
    <div className="block sm:hidden fixed left-0 right-0">
      <div className="bg-gray-500">
        <div className="  mx-8 sm:mx-16 py-4 flex justify-between items-center">
          <a href="/">Logo</a>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon/>
          </IconButton>
          {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
        </div>
      </div>

      <Drawer  anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MobileNav;
