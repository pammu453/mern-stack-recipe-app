import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [searchCountry, setSearchCountry] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        recipe.country.toLowerCase().includes(searchCountry.toLowerCase()) &&
        recipe.category.toLowerCase().includes(searchCategory.toLowerCase())
    );

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`/api/recipe/getAllRecipes`);
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="flex gap-2 flex-col md:flex-row">
                <input
                    type="text"
                    placeholder="Search recipes by title..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <input
                    type="text"
                    placeholder="Search recipes by country..."
                    value={searchCountry}
                    onChange={(event) => setSearchCountry(event.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <input
                    type="text"
                    placeholder="Search recipes by category..."
                    value={searchCategory}
                    onChange={(event) => setSearchCategory(event.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
            </div>
            <div className="flex flex-wrap -mx-2">
                {
                    filteredRecipes.length === 0 ?
                        <p className='text-slate-800'>No recipes found</p> :
                        filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))
                }
            </div>
        </div>
    );
};

export default RecipeList;
