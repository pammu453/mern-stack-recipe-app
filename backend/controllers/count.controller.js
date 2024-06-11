import Recipe from "../model/recipe.model.js";
import User from "../model/user.model.js";

export const countUsersAndRecipes = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalRecipes = await Recipe.countDocuments();

        res.json({ totalUsers, totalRecipes });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
