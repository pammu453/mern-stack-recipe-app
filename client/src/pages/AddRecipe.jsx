import React, { useContext, useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContest';


const AddRecipe = () => {

    const { user, fetchUserData } = useContext(StoreContext)

    const [recipeName, setRecipeName] = useState('');
    const [recipeImage, setRecipeImage] = useState(null);
    const [recipeDetails, setRecipeDetails] = useState('');
    const [youtubeCode, setYoutubeCode] = useState('');
    const [country, setCountry] = useState('');
    const [category, setCategory] = useState('');

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const handleImageChange = (e) => {
        setRecipeImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!recipeImage) return null;

        const formData = new FormData();
        formData.append('image', recipeImage);

        try {
            const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
                params: {
                    key: 'ba999bc69e13bc8cc7a5c665d28b8106',
                },
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const url = response.data.data.url;

            return url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recipeDetails) {
            return alert("Please enter recipe details")
        }

        try {
            const imageUrl = await handleUpload();

            const recipe = {
                recipeName,
                recipeImage: imageUrl,
                recipeDetails,
                youtubeCode,
                country,
                category,
                creatorEmail: user.email,
                watchCount: 0,
                purchased_by: [],
            };

            setLoading(true);
            const token = localStorage.getItem('authToken');
            await axios.post(`/api/recipe/add`, recipe, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Recipe added successfully!');
            navigate("/recipes")
            fetchUserData()
        } catch (error) {
            console.error('Error adding recipe:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container w-3/4 mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Add a New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Recipe Name</label>
                    <input
                        required
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Recipe Image</label>
                    <input required type="file" onChange={handleImageChange} className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Recipe Details</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={recipeDetails}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setRecipeDetails(data);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">YouTube Video Code</label>
                    <input
                        type="text"
                        required={true}
                        value={youtubeCode}
                        onChange={(e) => setYoutubeCode(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Country</label>
                    <input
                        type="text"
                        required={true}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <select
                        value={category}
                        required={true}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    >
                        <option value="">Select a Category</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="dessert">Dessert</option>
                    </select>
                </div>
                <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded">
                    {loading ? "Adding.." : "Submit Recipe"}
                </button>
            </form>
        </div>
    );
};

export default AddRecipe;
