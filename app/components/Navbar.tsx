/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { Link } from 'react-router';
import { GiMoon } from 'react-icons/gi';
import { LuSunMedium } from 'react-icons/lu';

const Navbar = () => {

  const handleDropdown = () => {
    const elem = document.activeElement as HTMLInputElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="navbar bg-primary/90 backdrop-blur text-primary-content sticky top-0 z-[100] shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-primary/90 text-primary-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={"/"} onClick={handleDropdown}>Homepage</Link></li>
            <li><Link to={"about"} onClick={handleDropdown}>About</Link></li>
            <li><Link to={"services"} onClick={handleDropdown}>Our services</Link></li>
            <li><Link to={"projects"} onClick={handleDropdown}>Portfolio</Link></li>
            <li><Link to={"contact"} onClick={handleDropdown}>Contact us</Link></li>
            <li><Link to={"timeline"} onClick={handleDropdown}>Timeline</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-sm btn-outline text-xl">Home</Link>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="dark" />
          {/* sun icon */}
          <LuSunMedium className="swap-off fill-current w-10 h-8" />
          {/* moon icon */}
          <GiMoon className="swap-on fill-current w-10 h-8" />
        </label>
      </div>
    </div>
  )
}

export default Navbar