
import { Link, NavLink } from "react-router-dom"
import PrimaryButton from "../Button/PrimaryButton"

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-3 bg-gray-200">
      <div className="flex items-center gap-2">
        <Link><img src="/logo.png" alt="Logo" id="logo" className=""/></Link>
        <p id='logoTitle'><span className="text-gray-500">|</span> Jyoti</p>
      </div>

      <div>
        <ul className="flex items-center gap-7" id="navLinks">
          <li><NavLink to='/' className={({isActive}) => `${isActive ? "text-sky-600" : "text-sky-900"}`}>Home</NavLink></li>
          <li><NavLink to='/about' className={({isActive}) => `${isActive ? "text-sky-600" : "text-sky-900"}`}>About</NavLink></li>
          <li><NavLink to='/skill' className={({isActive}) => `${isActive ? "text-sky-600" : "text-sky-900"}`}>Skills</NavLink></li>
          <li><NavLink to='/experience' className={({isActive}) => `${isActive ? "text-sky-600" : "text-sky-900"}`}>Experience</NavLink></li>
          <li><NavLink to='/project' className={({isActive}) => `${isActive ? "text-sky-600" : "text-sky-900"}`}>Projects</NavLink></li>
          <li><NavLink to='/contact' className={({isActive}) => `${isActive ? "text-sky-600" : "text-sky-900"}`}>Contact</NavLink></li>
        </ul>
      </div>

      <div className="flex items-center gap-7">
        <DarkModeIcon className="text-gray-700 hover:cursor-pointer hover:bg-gray-400"/>
        <PrimaryButton text='Download CV'/>
      </div>
    </nav>
  )
}

export default Header