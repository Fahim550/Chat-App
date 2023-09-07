import React from 'react'
import { auth } from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import LogOut from './logOut'
const style={
    nav:'bg-gray-950 h-20 flex justify-between p-4',
    head:'text-white text-3xl font-bold'
}
export default function Navbar() {
  const [user]=useAuthState(auth)
  console.log(user);
  return (
    <div className={style.nav}>
        <h1 className={style.head}>
          Chats
        </h1>
        {user?<LogOut/>:<SignIn/>}
    </div>
  )
}
