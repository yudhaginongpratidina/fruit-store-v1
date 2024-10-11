import { prismaClient } from "../utils/prisma.js";

class UserController {

    static async register(req, res) {

        const { name, email, password, confirmPassword } = req.body;

        try {
            const data_exist = await prismaClient.user.findFirst({
                where: {
                    email
                }
            })

            if (data_exist) {
                return res.status(400).json({ message: "Email already exist" })
            }

            if (confirmPassword === "") {
                return res.status(400).json({ message: "Please confirm your password" })
            }

            if (password !== confirmPassword) {
                return res.status(400).json({ message: "Password doesn't match" })
            }

            const createUser = await prismaClient.user.create({
                data: {
                    email : email,
                    name : name,
                    password : password
                },
                select: {
                    email: true
                }
            })

            return res.status(201).json({ message: "User created successfully", data: createUser })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async login(req, res) {
        const {email, password} = req.body

        try {
            const findData = await prismaClient.user.findFirst({
                where: {
                    email
                },
                select: {
                    id: true,
                    email: true,
                    password: true
                }
            })

            if (!findData) {
                return res.status(404).json({ message: "User not found" })
            }

            if (password !== findData.password) {
                return res.status(400).json({ message: "Password doesn't match" })
            }

            return res.status(200).json({ message: "Login successfully", data: findData.id })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async account(req, res) {
        const { id } = req.params

        try {
            const findData = await prismaClient.user.findFirst({
                where: {
                    id
                },
                select: {
                    email: true
                }
            })

            if (!findData) {
                return res.status(404).json({ message: "User not found" })
            }

            return res.status(200).json({ message: "User found successfully", data: findData })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async updatePassword(req, res) {
        const { id } = req.params
        const { newPassword, confirmPassword } = req.body

        try {

            if (confirmPassword === "") {
                return res.status(400).json({ message: "Please confirm your password" })
            }

            if (newPassword !== confirmPassword) {
                return res.status(400).json({ message: "Password doesn't match" })
            }

            const update_password = await prismaClient.user.update({
                where: {
                    id
                },
                data: {
                    password : newPassword
                }
            })

            if (update_password){
                return res.status(200).json({ message: "Password updated successfully" })
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export default UserController