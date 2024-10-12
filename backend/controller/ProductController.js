import { prismaClient } from "../utils/prisma.js";

class ProductController {

    static async getProduct(req, res) {
        try {
            const response = await prismaClient.product.findMany({
                include: {
                    category: true
                }
            })

            return res.status(200).json({ message: "Product found successfully", data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async getProductById(req, res) {
        try {
            const { id } = req.params
            const response = await prismaClient.product.findFirst({
                where: {
                    id
                },
                include: {
                    category: true
                }
            })

            if (!response) {
                return res.status(404).json({ message: "Product not found", data: [] })
            }

            return res.status(200).json({ message: "Product found successfully", data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async createProduct(req, res) {
        try {
            const { imageUrl,name, categoryId, price } = req.body

            const data_exist = await prismaClient.product.findFirst({
                where: {
                    name
                }
            })

            if (data_exist) {
                return res.status(400).json({ message: "Product already exist" })
            }

            const response = await prismaClient.product.create({
                data: {
                    imageUrl,
                    name,
                    categoryId,
                    price : Number(price)
                }
            })

            return res.status(201).json({ message: "Product created successfully", data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async updateProduct(req, res) {
        try {
            const { id } = req.params
            const { imageUrl, name, categoryId, price } = req.body

            const response = await prismaClient.product.update({
                where: {
                    id
                },
                data: {
                    imageUrl,
                    name,
                    categoryId,
                    price
                }
            })

            return res.status(200).json({ message: "Product updated successfully", data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params
            const response = await prismaClient.product.delete({
                where: {
                    id
                }
            })

            return res.status(200).json({ message: "Product deleted successfully", data: response })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
    
}

export default ProductController