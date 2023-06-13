import express from "express";
import {ProductController} from "../controllers/api.controller/product.controller";

const apiRouter = express.Router();

apiRouter.post('/product/create', ProductController.addProduct);
apiRouter.put('/product/:id/update', ProductController.updateProduct);
apiRouter.delete('/product/:id/delete', ProductController.deleteProduct);
apiRouter.get('/product/list', ProductController.getListProduct);
apiRouter.get('/product/:id/detail', ProductController.getDetailProduct);

export default apiRouter;