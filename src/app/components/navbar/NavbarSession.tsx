import React from "react";
import Navbar from "./Navbar"


import { auth } from "../../lib/auth"

const NavbarSession = async () => {
  const session = await auth();
  console.log('user is logged in',session);
  return (
    <div>
   
      <div>
        <Navbar session={session} />
      </div>
    </div>
  );
};
export default NavbarSession;