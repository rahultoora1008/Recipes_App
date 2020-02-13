import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
		instructions: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		onDelete: PropTypes.func.isRequired
	};

	render() {
		const { title, img, instructions, id, onDelete } = this.props; // Destructuring/Shorthand for title = this.props.title
		const ingredients = this.props.ingredients.map((ing, index) => (
			<li key={index}>{ing}</li> // array of jsx elements not strings
		));
		return (
			// Never return multiple JSX elements next to each other hence a Wrap it in a div
			<div className="recipe-card">
				<div>
					<div className="recipe-card-img">
						<img src={img} alt={title} />
					</div>
					<div className="recipe-card-content">
						<div className="recipe-title">{title} </div>
						<div>
							Ingredients:
							<ul>{ingredients}</ul>
						</div>
						<div>
							Instructions:
							<p>{instructions}</p>
						</div>
					</div>
				</div>
				<div className="deleteButton">
					<button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(id)}>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

export default Recipe;
