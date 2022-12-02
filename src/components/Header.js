import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};
C:\Users\ABHISHEK\Downloads\Sticky-notes-react-app-master\Sticky-notes-react-app-master\src
export default Header;
