import userSchema from "../models/user.model.js";
export const register = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const newUser = new userSchema({
            email,
            password,
            username,
        });
        const userCreated = await newUser.save();
        res.json(userCreated);
    } catch (error) {
        res.status(409).send(error.message);
    }
}