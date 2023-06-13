import {AppDataSource} from "./src/data-source";
import {Products} from "./src/entity/Products";
import express from 'express';
import bodyParser from "body-parser";
import apiRouter from "./src/routers/api.router";

const port = 8000;

AppDataSource.initialize()
    .then(() => {
        console.log('Data source has been initialized!');
    })
    .catch(err => {
        console.log('Error during data source initialization!', err);
    });

export const ProductRepo = AppDataSource.getRepository(Products);

const app = express();
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});