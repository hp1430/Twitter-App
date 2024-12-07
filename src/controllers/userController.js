import { createUser as createUserService } from "../services/userService.js";

export const createUser = async(req, res) => {
    try {
        const response = await createUserService({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            success: true,
            data: response,
            message: "User Created Successfully"
        })
    }
    catch(error) {
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                message: error.message,
                success: false
            })
        }
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}