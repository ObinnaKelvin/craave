import "./navbar.css"
import logo from "../../images/craave_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
      setOpen(!open)
      console.log(open)
  }
  return (
    <div className="navbar">
        <div className="navContainer">
            {/* <span className="logo">Craave Logo</span> */}
           <Link to="/"><span className="logo"><img src={logo} alt="logo" className="logo-image"/></span></Link>
            <div className="navItems">
                {/* <button className="navButton">Register</button>
                <button className="navButton">Login</button> */}
                <div className={`user`} onClick={handleOpen}>
                  <span><FontAwesomeIcon icon={faUser}  className="user-icon"/></span>
                  <div className={`dropDown ${open ? 'active': 'inactive'}`}>
                    <ul>
                      <li>Register</li>
                      <li>Login</li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar