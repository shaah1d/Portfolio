import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-white">
    <div className="navbar-start">
    
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a href='https://github.com/shaah1d' className='mr-3'>Github</a>
        </li>
        <li>
         <a href='https://x.com/shaah1d'>Twitter</a>
        </li>
        <li><a href="mailto:writetoshaahid@gmail.com?subject=Hello&body=I would like to discuss...">Email</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
  
    </div>
  </div>
  )
}

export default Navbar