import React, { useState } from "react"

//Components
import UserForm from "../../components/Home/UserForm/UserForm"
import UserGithub from "../../components/custom/User/UserGithub"
import Loader from "../../components/custom/Loader/Loader"
import NotFound from "../NotFound/NotFound"

const Home = () => {
	const [user, setUser] = useState("")
	const [userInfo, setUserInfo] = useState(null)
	const [loader, setLoader] = useState(false)

	//Funciones
	const handleUser = ({ value }) => {
		setUser(value)
	}

	const handleUserInfo = async (e) => {
		e.preventDefault()
		setLoader(true)

		try {
			const API = `https://api.github.com/users/${user}`
			const response = await fetch(API)
			const result = await response.json()
			// console.log(result)
			setUserInfo(result)
			setLoader(false)
			setUser("")
		} catch (error) {
			console.log(error)
		}
	}
	// console.log(userError)
	return (
		<>
			<UserForm
				handleUser={handleUser}
				handleUserInfo={handleUserInfo}
				user={user}
			/>

			{userInfo?.message ? (
				<NotFound />
			) : userInfo ? (
				<UserGithub
					avatar={userInfo?.avatar_url}
					bio={userInfo?.bio}
					followers={userInfo?.followers}
					following={userInfo?.following}
					location={userInfo?.location}
					name={userInfo?.name}
					repos={userInfo?.public_repos}
					github={userInfo?.html_url}
					githubName={userInfo?.login}
					followers_url={userInfo?.followers_url}
					following_url={userInfo?.following_url}
				/>
			) : null}

			{loader && <Loader />}
		</>
	)
}

export default Home
