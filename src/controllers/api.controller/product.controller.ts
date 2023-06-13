import {ProductRepo} from "../../../index";

export class ProductController {
    static async addProduct(req, res) {
        try {
            const productSearch = await ProductRepo.findOneBy({name: req.body.name});
            if (productSearch) {
                res.status(500).json({
                    message: 'Product already exists!'
                });
            }
            const productData = {
                price: req.body.price,
                name: req.body.name,
                author: req.body.author,
                avatar: req.body.avatar
            };
            const product = await ProductRepo.save(productData);
            if (product) {
                res.status(200).json({
                    message: 'Create product success!',
                    product: product
                })
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async updateProduct(req, res) {
        try {
            let productSearch = await ProductRepo.findOneBy({id: +req.params.id});
            if (!productSearch) {
                res.status(500).json({
                    message: 'Product does not exist!'
                });
            }
            await ProductRepo.update({id: +req.params.id}, req.body);
            res.status(200).json({
                message: 'Update product success!'
            });
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async deleteProduct(req, res) {
        try {
            let productSearch = await ProductRepo.findOneBy({id: +req.params.id});
            if (!productSearch) {
                res.status(500).json({
                    message: 'Product does not exist!'
                });
            }
            await ProductRepo.delete({id: +req.params.id});
            res.status(200).json({
                message: 'Delete product success!'
            });
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async getListProduct(req, res) {
        try {
            const products = await ProductRepo.find();
            if (products) {
                res.status(200).json({
                    message: 'Sucess!',
                    products: products
                })
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async getDetailProduct(req, res) {
        try {
            let productId = +req.params.id;
            const product = await ProductRepo.findOneBy({id: productId});
            if (product) {
                res.status(200).json({
                    message: 'Sucess!',
                    product
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
}