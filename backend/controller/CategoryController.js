import { prismaClient } from "../utils/prisma.js";

class CategoryController {

    static async getCategory(req, res) {
        try {
            const response = await prismaClient.category.findMany()
            return res.status(200).json({ message: "Category found successfully" ,data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async getCategoryById(req, res) {
        try {
            const { id } = req.params
            const response = await prismaClient.category.findFirst({
                where: {
                    id
                },
                select : {
                    id : true,
                    name : true
                }
            })

            if (!response) {
                return res.status(404).json({ message: "Category not found", data: [] })
            }

            return res.status(200).json({ message: "Category found successfully", data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async createCategory(req, res) {
        try {
            const { name } = req.body

            const data_exist = await prismaClient.category.findFirst({
                where: {
                    name : name
                }
            })

            if (data_exist) {
                return res.status(400).json({ message: "Category already exist" })
            }

            const response = await prismaClient.category.create({
                data: {
                    name
                }
            })

            return res.status(201).json({ message: "Category created successfully", data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async updateCategory(req, res) {
        try {
            const { id } = req.params
            const { name } = req.body

            const response = await prismaClient.category.update({
                where: {
                    id
                },
                data: {
                    name
                },
                select: {
                    id : true,
                    name : true,
                    updatedAt : true
                }
            })

            return res.status(200).json({ message: "Category updated successfully", data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async deleteCategory(req, res) {
        try {
            const { id } = req.params

            const data_exist = await prismaClient.category.findFirst({
                where: {
                    id
                }
            })

            if (!data_exist) {
                return res.status(404).json({ message: "Category not found" })
            }

            const response = await prismaClient.category.delete({
                where: {
                    id
                }
            })

            return res.status(200).json({ message: "Category deleted successfully", data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

}

export default CategoryController