import React, { Component } from 'react';
import './Navbar.css';
import chefSvg from '../svg/chef.svg';

class Navbar extends Component {
	render() {
		return (
			<header>
				<a>
					<div id="logo-container">
						<img id="nav-logo" src={chefSvg} />
						<h1>Recipes</h1>
					</div>
				</a>
				<nav>
					<li>
						<a>Add Recipe</a>
					</li>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Contact Us</a>
					</li>
				</nav>
			</header>
		);
	}
}

export default Navbar;
