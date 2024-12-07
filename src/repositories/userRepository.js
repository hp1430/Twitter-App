import User from "../schema/user.js";

export const signUp = async({ username, email, password}) => {
    try {
        const user = await User.create({ username, email, password});
        return user;
    }
    catch(error) {
        throw error;
    }
}