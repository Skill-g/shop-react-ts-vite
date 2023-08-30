import express, { Router } from "express";
const router = express.Router()
import { getSneakers, createSneaker, getSneaker } from "../sneaker.js";
import multer from 'multer'
import path from "path";

const storage = multer.diskStorage({
    destination: './public/assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage });

router.get('/', getSneakers);
router.get('/:id', getSneaker);
router.post('/', upload.single('sneakerimage'), createSneaker);

export default router;