import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoOutUser } from '../actions';

export default function UserProfile() {
	const {email, name, picture} = useSelector((state) => state.updateCurrentUser);
	const dispatch = useDispatch();

  return (
    <div>
			<div className="dropstart">
				<img src={picture} className="profile-image dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" alt="image not found" />
				<ul className="dropdown-menu">
					<li className='dropdown-item'>
						<img src={picture} className='user-profile' alt="image not found" />
					</li>
					<li className='dropdown-item'>
						{name}
					</li>
					<li className='dropdown-item'>
						{email}
					</li>
					<li className='dropdown-item'>
						<Link onClick={() => {
								dispatch(logoOutUser());
								dispatch({type: 'RESETWATCH'});
							}}
							className="logout-link">
							<h4>LogOut</h4>
						</Link>
					</li>
				</ul>
			</div>
    </div>
  )
}
