import React from 'react'
import { auth } from './firebase'

const style={
    button:`bg-gray-200 px-4 py-2 hover:bg-gray-100 rounded-lg `
}
export default function logOut() {
    const signOut=()=>{
        signOut(auth)
    }
  return (
    <div onClick={()=>auth.signOut()} className={style.button}> 
        Logout
    </div>
  )
}
