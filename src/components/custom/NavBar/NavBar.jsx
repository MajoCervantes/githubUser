import React from "react"

//Styles
import "./NavBar.styles.css"

//Router
import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<div className='bg-greyBlue text-3xl flex justify-center items-center p-4 text-white font-bold nav-bar'>
			<Link to='/'>API Github</Link>
		</div>
	)
}

export default NavBar
