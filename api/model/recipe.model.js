import mongoose from "mongoose"

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    creatorEmail: {
        type: String,
        required: true
    },
    watchCount: {
        type: Number, default: 0
    },
    purchased_by: [String]
});

const Recipe = mongoose.model('Recipe', RecipeSchema)

export default Recipe