import Sneaker from "./modelsneaker.js";

const getSneakers = async(req, res) => {
    try {
        const mysneaker = await Sneaker.find()

        res.status(200).json(mysneaker)
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Не удалось получить список кросовок, повторите попытку",
            })
    }
};

const getSneaker = async(req, res) => {
    try {

        const gsneaker = await Sneaker.find({ _id: req.params.id });

        res.status(200).json(gsneaker);
    } catch {
        res.status(404).json({
            message: "Самолёт не найден"
        })
    }
};


const createSneaker = async(req, res) => {
    const errors = {};

    if (!req.body.name) {
        errors.name = { message: "Пожалуйста, укажите название" };
    }

    if (!req.body.price) {
        errors.price = { message: "Пожалуйста, укажите цену" };
    }

    if (!req.body.description) {
        errors.description = { message: "Пожалуйста, укажите описание" };
    }


    if (!req.file) {
        errors.sneakerimage = { message: "Пожалуйста, добавьте фото кросовка" };
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }

    try {
        const { name, price, description } = req.body;
        const createSneakers = await Sneaker.create({
            name,
            price,
            description,
            sneakerimage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
        })
        res.status(201).json(createSneakers)
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Не удалось создать, повторите попытку",
            })
    }
};
export { getSneakers, createSneaker, getSneaker };