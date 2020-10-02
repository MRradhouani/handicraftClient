import React, { useContext } from 'react'
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../App"

const Navbar = () => {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/Profiles">profile</Link></li>,
                <li><Link to="/CreatePost">Create New Post </Link></li>,
                <li> <button className="btn waves-effect waves-light .#64b5f6 red"
                    onClick={() => {
                        localStorage.clear()
                        dispatch({ type: "CLEAR" })
                        history.push('/Login')
                    }}
                >
                    LogOut
            </button>
                </li>

            ]
        }
        else {
            return [
                <li><Link to="/Login">Signin</Link></li>,
                <li><Link to="/Signup">signup</Link></li>

            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper white" style={{ color: "black" }}>
                <Link to={state ? "/" : "/Login"} className="brand-logo left">Handicraft</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>

  
        </nav >
    )
}

export default Navbar