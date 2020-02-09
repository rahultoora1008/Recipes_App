import React, {Component} from 'react';
import './Recipe.css'

class Recipe extends Component {
    render() {
        const {title, img, instructions} = this.props; // Destructuring/Shorthand for title = this.props.title
        const ingredients = this.props.ingredients.map((ing, index) => (    
        <li key={index}>{ing}</li>  // array of jsx elements not strings
        ));
        return(
            // Never return multiple JSX elements next to each other hence a Wrap it in a div 
            <div className="recipe-card">
                <div className="recipe-card-img" ><img src={img} alt={title}></img></div>
                <div className="recipe-card-content" >
                    <h3 className='recipe-title' >{title} </h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                </div>
            </div>
        )
    }
}

export default Recipe;