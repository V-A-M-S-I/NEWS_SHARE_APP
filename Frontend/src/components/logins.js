import React from 'react'
import Userlogin from "./Userlogin";
import AdminLogin from "./AdminLogin";


export default function logins({setIsLoggedIn}) {
  return (
    <div className="container">
      <Userlogin className="component1" setIsLoggedIn={setIsLoggedIn}/>
      <AdminLogin className="component2" setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}
