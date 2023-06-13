"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/api.controller/product.controller");
const apiRouter = express_1.default.Router();
apiRouter.post('/product/create', product_controller_1.ProductController.addProduct);
apiRouter.put('/product/:id/update', product_controller_1.ProductController.updateProduct);
apiRouter.delete('/product/:id/delete', product_controller_1.ProductController.deleteProduct);
apiRouter.get('/product/list', product_controller_1.ProductController.getListProduct);
apiRouter.get('/product/:id/detail', product_controller_1.ProductController.getDetailProduct);
exports.default = apiRouter;
//# sourceMappingURL=api.router.js.map