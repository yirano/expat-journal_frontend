import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest} // path='/protected'
			render={props => {
				if (localStorage.getItem('token')) {
					return <Component {...props} /> // Component being rendered is "Protected"
				} else {
					return <Redirect to='login' />
				}
			}}
		/>
	)
}

export default PrivateRoute