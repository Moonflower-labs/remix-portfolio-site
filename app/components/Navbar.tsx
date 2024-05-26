/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { Link } from '@remix-run/react'

const Navbar = () => {

    const handleDropdown = () => {
        const elem = document.activeElement as HTMLInputElement;
        if (elem) {
          elem?.blur();
        }
      };

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={"/"} onClick={handleDropdown}>Homepage</Link></li>
        <li><Link to={"projects"} onClick={handleDropdown}>Portfolio</Link></li>
        <li><Link to={"about"} onClick={handleDropdown}>About</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a href="/" className="btn btn-ghost text-xl">Home</a>
  </div>
  <div className="navbar-end">
    <a href="/" className="btn btn-ghost text-xl">Home</a>
  </div>
</div>
  )
}

export default Navbar