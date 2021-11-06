import React, { useState, useEffect } from "react"
import { useParams } from "react-router"

//Components
import UserGithub from "../../components/custom/User/UserGithub"
import Loader from "../../components/custom/Loader/Loader"

const Followers = () => {
	const { user } = useParams()

	const [followers, setFollowers] = useState([])
	const [loader, setLoader] = useState(false)

	useEffect(() => {
		const handleFollowers = async () => {
			setLoader(true)
			const response = await fetch(
				`https://api.github.com/users/${user}/followers`
			)
			const result = await response.json()
			console.log(result)
			setFollowers(result)
			setLoader(false)
		}
		handleFollowers()
	}, [user])

	return (
		<>
			{followers &&
				followers.length > 0 &&
				followers.map((user) => (
					<UserGithub
						key={user?.login}
						avatar={user?.avatar_url}
						githubName={user?.login}
						github={user?.html_url}
						repos={user?.public_repos}
					/>
				))}
			{loader && <Loader />}
		</>
	)
}

export default Followers
