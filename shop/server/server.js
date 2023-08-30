import express from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/sneakers.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("./public/assets/"));
app.use('/api/sneakers', router);

connect("mongodb://localhost:27017")
    .then(() => {
        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });