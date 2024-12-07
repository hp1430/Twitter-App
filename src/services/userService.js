import { signUp } from "../repositories/userRepository.js";

export const createUser = async({ username, email, password}) => {
    const user = await signUp({ username, email, password});
    return user;
}