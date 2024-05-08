import { useState } from 'react';
import './Toggle.css';

function Toggle() {

	const [clicked, setClicked] = useState(false);

	return(
		<>
		<div className={`toggle_container ${clicked && 'container_clicked'}`} onClick={()=>{setClicked(!clicked)}}>
			<div className={`toggle_circle ${clicked && 'circle_clicked'}`}></div>
			<p className={`toggle_title toggle_private ${clicked && 'private_clicked'}`}>PRIVATE</p>
			<p className={`toggle_title toggle_public ${!clicked && 'public_clicked'}`}>PUBLIC</p>
		</div>
		</>
	)
}

export default Toggle;