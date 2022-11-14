import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useSelector, useDispatch } from 'react-redux';
import { logInUser } from '../actions/index';
import ApiCall from './ApiCall';
import UserProfile from './UserProfile';

export default function HeaderFooter() {
	const [currentUser, watchList] = useSelector((state) => [state.updateCurrentUser, state.updateWatchList]);
	const watchList_length = watchList.length;
	const dispatch = useDispatch();

	useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  } , [currentUser]);

	const login = useGoogleLogin({
		onSuccess: response => {
			ApiCall('GET', 'https://www.googleapis.com/oauth2/v3/userinfo', { headers: { 'Authorization':  `Bearer ${response.access_token}`} })
			.then((res) => {
				console.log(res);
				dispatch(logInUser(res));
			})
			.catch((error) => console.log(error));
		}
	});

	return (
		<>
			{/* Header */}
			<nav className="navbar navbar-expand-lg dark-background header">
				<div className="container-fluid">
					<Link to='/' className="navbar-brand header-link" style={{ color: 'white' }}>
						<h3 className='font-logo'>Champions</h3>
					</Link>

					{
						Object.keys(currentUser).length === 0 ?
							<Link onClick={login} className='header-link'>
								LogIn With Google
							</Link>
						:
							<div style={{display: 'flex'}}>
								<div style={{display: 'inline-block', paddingRight: '10px', paddingTop: '5px'}}>
									<Link to='/watchedchampions' className='btn btn-watchList position-relative'>
										WatchList
										<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
											{watchList_length}
										</span>
									</Link>
								</div>

								<div style={{float: 'right', paddingLeft: '15px', margin: 'auto'}}>
									<UserProfile />
								</div>
							</div>
          }
				</div>
			</nav>

			{/* Body */}
			<div className='container-fluid padding-10' style={{ paddingBottom: '60px' }}>
				<Outlet />
				<br />
			</div>

			{/* Footer */}
			<div className='dark-background text-center footer padding-10'>
				<p>© 2022 TPG - Created By Tarushi Patidar (Software Engineer).</p>
			</div>
		</>
	)
}
