import User from '../model/user.model.js';
import Recipe from '../model/recipe.model.js';

// Get all recipes
export const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}, 'name image purchased_by creatorEmail category country');
    res.json(recipes);
}

// Add a new recipe
export const addRecipe = async (req, res) => {
    try {
        const { recipeName, recipeImage, recipeDetails, youtubeCode, country, category } = req.body;
        const { email } = req.user;

        const recipe = new Recipe({
            name: recipeName,
            image: recipeImage,
            details: recipeDetails,
            video: youtubeCode,
            country,
            category,
            creatorEmail: email
        });

        await recipe.save();

        let user = await User.findOne({ email });

        if (user) {
            user.coin = (user.coin || 0) + 1;
            await user.save();
        }

        res.json({ recipe, user });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while adding the recipe" });
    }
}

// View recipe details
export const viewRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        const user = await User.findOne({ email: req.user.email });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Case 2: user is the creator
        if (recipe.creatorEmail === req.user.email) {
            return res.json(recipe);
        }

        // Case 5: user already purchased the recipe
        if (recipe.purchased_by.includes(req.user.email)) {
            return res.json(recipe);
        }

        // Case 3: user does not have enough coins
        if (user.coin < 10) {
            return res.status(403).json({ message: 'Not enough coins' });
        }

        // Case 4: user has enough coins
        // Deduct 10 coins, add 1 coin to the creator, update recipe details
        user.coin -= 10;
        await user.save();

        const creator = await User.findOne({ email: recipe.creatorEmail });
        if (creator) {
            creator.coin += 1;
            await creator.save();
        }

        recipe.purchased_by.push(req.user.email);
        recipe.watchCount += 1;
        await recipe.save();

        return res.json(recipe);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//purchases coins
export const purchaseCoins = async (req, res) => {
    const { coins } = req.body;

    const user = await User.findOne({ email: req.user.email });

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    user.coin += coins;

    await user.save();

    res.status(200).json({
        message: 'Coins purchased successfully',
        coin: user.coin,
    });
}

//Smiler recipes by country or category
export const getRecipesBySuggestions = async (req, res) => {
    try {
        const { recipeId } = req.params
        const currentRecipe = await Recipe.findById(recipeId)
        const suggestions = await Recipe.find({
            $or: [
                { category: currentRecipe.category },
                { country: currentRecipe.country }
            ],
            _id: { $ne: recipeId }
        }).limit(3)
        res.json(suggestions);
    } catch (error) {
        console.error('Error fetching recipe suggestions:', error);
        res.status(500).json({ message: 'Server Error' });
    }
}