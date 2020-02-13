import React, { Component } from 'react';
//import Recipe from './Components/Recipe';
import './RecipeApp.css';
import Navbar from './Components/Navbar';
import RecipeList from './Components/RecipeList';
import RecipeForm from './Components/RecipeForm';
//import PropTypes from 'prop-types';

class RecipeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [
				{
					id: 0,
					title: 'Spaghetti',
					ingredients: [ 'pasta', '8 cups water', '1 box spaghetti' ],
					instructions:
						'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.',
					img: 'spaghetti.jpg'
				},
				{
					id: 1,
					title: 'Milkshake',
					ingredients: [ '1 scoops ice cream', '8 ounces milk' ],
					instructions: 'Combine ice cream and milk. Blend until creamy.',
					img: 'milkshake.jpg'
				},
				{
					id: 2,
					title: 'Avocado Toast',
					ingredients: [ '3 slices of bread', '1 avocado', '1 Tbsp olive oil', '1 pinch of salt', 'pepper' ],
					instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.',
					img: 'avocado_toast.jpg'
				},
				{
					id: 3,
					title: 'Chocolate Chip Cookies',
					ingredients: [ '3 slices of bread', '1 avocado', '1 Tbsp olive oil', '1 pinch of salt', 'pepper' ],
					instructions:
						'Preheat oven to 375 degrees F. Combine flour, baking soda and salt in small bowl. Beat butter, granulated sugar, brown sugar and vanilla extract in large mixer bowl until creamy. Add eggs, one at a time, beating well after each addition. Gradually beat in flour mixture. Stir in morsels and nuts. Drop by rounded tablespoon onto ungreased baking sheets. Bake for 9 to 11 minutes or until golden brown. Cool on baking sheets for 2 minutes; remove to wire racks to cool completely.',
					img: 'Chocolate Chip Cookies.jpg'
				}
			],
			nextRecipeId: 4,
			showForm: false
		};

		this.handleSave = this.handleSave.bind(this);
		this.onEscKeyPress = this.onEscKeyPress.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	handleSave(recipe) {
		this.setState((prevState, props) => {
			const newRecipe = { ...recipe, id: this.state.nextRecipeId };
			return {
				nextRecipeId: prevState.nextRecipeId + 1,
				recipes: [ ...this.state.recipes, newRecipe ],
				showForm: false
			};
		});
	}

	onEscKeyPress(e) {
		if (e.keyCode === 27) {
			this.setState({ showForm: false });
		}
	}

	onDelete(id) {
		const recipes = this.state.recipes.filter((r) => r.id !== id);
		this.setState({ recipes });
	}

	render() {
		const { showForm } = this.state;
		return (
			<div className="App">
				<Navbar onAddRecipe={() => this.setState({ showForm: true })} />
				{showForm ? (
					<RecipeForm
						onSave={this.handleSave}
						onClose={() => this.setState({ showForm: false })}
						onKeyDown={this.onEscKeyPress}
					/>
				) : null}
				<RecipeList recipes={this.state.recipes} onDelete={this.onDelete} />
			</div>
		);
	}
}

export default RecipeApp;
