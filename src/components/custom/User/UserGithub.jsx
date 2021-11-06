import React from "react"
import { Link } from "react-router-dom"

//Styles
import "./UserGithub.styles.css"

const UserGithub = ({
	avatar,
	bio,
	followers,
	following,
	location,
	name,
	repos,
	github,
	githubName,
}) => {
	return (
		<>
			{bio ? (
				<div className='w-full flex flex-col items-center justify-center mt-6 bg-blue md:w-4/5 lg:w-1/2 m-auto p-6 user-container'>
					<img
						src={avatar}
						alt={githubName}
						className='user-img w-52 h-52'
					/>

					<h1 className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5 lg:w-3/5 user-button'>
						Nombre: {name} <br /> Usuario:{" "}
						{githubName}
					</h1>

					<h2 className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5 lg:w-3/5 user-button'>
						{bio}
					</h2>
					<h3 className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5 lg:w-3/5 user-button'>
						{location}
					</h3>
					<a
						href={github}
						target='_blank'
						rel='noreferrer'
						className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5 lg:w-3/5 user-button'>
						Página de Github
					</a>

					<div className='flex flex-col md:flex-row mt-7 justify-evenly items-center w-full'>
						<p className='bg-secondary text-white font-bold p-2 user-button mb-5 md:mb-0'>
							Sigue a: {following}
						</p>

						<Link to={`/followers/${githubName}`}>
							<p className='bg-secondary text-white font-bold p-2 user-button mb-5 md:mb-0'>
								Lo siguen: {followers}
							</p>
						</Link>

						<Link to={`/repos/${githubName}`}>
							<p className='bg-secondary text-white font-bold p-2 user-button mb-5 md:mb-0'>
								Repositorios: {repos}
							</p>
						</Link>
					</div>
				</div>
			) : (
				<div className='w-full flex flex-col items-center justify-center mt-6 bg-blue md:w-4/5 lg:w-1/2 m-auto p-6 user-container'>
					<img
						src={avatar}
						alt={githubName}
						className='user-img w-52 h-52'
					/>

					<h1 className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5 lg:w-3/5 user-button'>
						Usuario: {githubName}
					</h1>
					<div className='flex flex-col mt-7 justify-evenly items-center w-full'>
						{" "}
						<a
							href={github}
							target='_blank'
							rel='noreferrer'
							className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5 lg:w-3/5 user-button mb-5 md:mb-0'>
							Página de Github
						</a>
						<Link to={`/repos/${githubName}`}>
							<p className='bg-secondary text-white font-bold p-2 user-button mt-2 mb-5 md:mb-0'>
								Repositorios
							</p>
						</Link>
					</div>
				</div>
			)}
		</>
	)
}

export default UserGithub
