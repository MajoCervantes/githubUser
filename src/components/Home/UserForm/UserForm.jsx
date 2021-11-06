import React from "react"

//Styles
import "./UserForm.styles.css"

const UserForm = ({
	handleUser,
	handleUserInfo,
	user,
}) => {
	return (
		<div className='w-full md:w-1/2 m-auto text-center mt-12'>
			<form
				action=''
				onSubmit={(e) => handleUserInfo(e)}>
				<input
					value={user}
					className='mr-4 p-3 outline-none border-2 border-lightBlue bg-grey text-white font-bold'
					type='text'
					placeholder='Usuario'
					onChange={({ target }) =>
						handleUser(target)
					}
				/>
				<button className='bg-lightBlue text-white font-bold p-3 userForm-button'>
					Buscar
				</button>
			</form>
		</div>
	)
}

export default UserForm
