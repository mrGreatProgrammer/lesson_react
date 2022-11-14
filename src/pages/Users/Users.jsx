import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navs/NavBar/NavBar'

let links = [
  { id: 1, linkTxt: "findFriend", linkHref: "/users/search" },
  { id: 2, linkTxt: "my friends", linkHref: "/users/my_friends" },
];

const Users = () => {
  return (
    <div>
      users
      <NavBar links={links} />
      <div className="center">
        <Outlet />
      </div>
    </div>
  )
}

export default Users