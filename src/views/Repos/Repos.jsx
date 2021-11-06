import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import Loader from "../../components/custom/Loader/Loader"

const Repos = () => {
	const { user } = useParams()

	const [repositories, setRepositories] =
		useState([])
	const [loader, setLoader] = useState(false)

	useEffect(() => {
		const handleRepos = async () => {
			setLoader(true)
			const response = await fetch(
				`https://api.github.com/users/${user}/repos`
			)
			const result = await response.json()
			console.log(result)
			setRepositories(result)
			setLoader(false)
		}
		handleRepos()
	}, [user])

	return (
		<>
			{repositories &&
				repositories.length > 0 &&
				repositories.map((r) => (
					<div className='w-full flex flex-col items-center justify-center mt-6 bg-blue md:w-4/5 lg:w-1/2 m-auto p-6 user-container'>
						<h1 className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5  user-button text-center'>
							Nombre: {r.name}
						</h1>
						<a
							className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5  user-button text-center'
							href={r.html_url}
							target='_blank'
							rel='noreferrer'>
							Ir al repositorio
						</a>
						{r.homepage && (
							<a
								className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5  user-button text-center'
								href={r.homepage}
								target='_blank'
								rel='noreferrer'>
								Ir a la App
							</a>
						)}
						<p className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5  user-button text-center'>
							Lenguaje: {r.language}
						</p>
						{r.description && (
							<p className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5  user-button text-center'>
								Descripción: {r.description}
							</p>
						)}
						<p className='bg-secondary p-2 text-white mt-2 font-bold mx-2 w-full md:w-4/5  user-button text-center'>
							Visibilidad: {r.visibility}
						</p>
					</div>
				))}
			{loader && <Loader />}
		</>
	)
}

export default Repos
