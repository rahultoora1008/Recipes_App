import React, { Component } from 'react';
import './Navbar.css';
import chefSvg from '../svg/chef.svg';
import PropTypes from 'prop-types';

class Navbar extends Component {
	static defaultProps = {
		onAddRecipe() {}
	};

	static propTypes = {
		onAddRecipe: PropTypes.func
	};

	render() {
		return (
			<header>
				<a>
					<div id="logo-container">
						<img alt="logo" id="nav-logo" src={chefSvg} />
						<h1>Recipes</h1>
					</div>
				</a>
				<nav>
					<li>
						<a onClick={this.props.onAddRecipe}>Add Recipe</a>
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
