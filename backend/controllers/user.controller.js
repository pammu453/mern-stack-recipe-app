import admin from '../firebase.js'
import User from '../model/user.model.js'

export const login = async (req, res) => {
    try {
        const { token } = req.body;
        const decodedToken = await admin.auth().verifyIdToken(token);
        const { name, picture, email } = decodedToken;

        const user = await User.findOneAndUpdate(
            { email },
            {
                displayName: name,
                photoURL: picture,
                email
            },
            {
                new: true, // Return the updated document
                upsert: true // Create a new document if it doesn't exist
            }
        );

        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while logging in" });
    }
}
