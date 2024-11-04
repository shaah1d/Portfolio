import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-white">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu bg-white menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href='https://github.com/shaah1d' className='mr-3'>Github</a></li>
        <li>
        <a href='https://x.com/shaah1d'>Twitter</a>
         
        </li>
        <li><a href="mailto:writetoshaahid@gmail.com?subject=Hello&body=I would like to discuss...">Email</a></li>
      </ul>
    </div>
    
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
    <a href="/resume.pdf"  className='btn text-white'download>
   Resume
    </a>
    </div>
  </div>
  )
}

export default Navbar