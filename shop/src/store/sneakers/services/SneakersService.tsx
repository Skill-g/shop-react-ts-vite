import axios from "axios";

const getSneakers = async () => {
    const sneaker = await axios.get('/api/sneaker');
    return sneaker.data;
}

const getSneaker = async (id: any) => {
    const sneaker = await axios.get(`/api/sneaker/${id}`);
    return sneaker.data;
}

const createsneake = async (sneakerData: any) => {
    const sneaker = await axios.post('/api/sneaker', sneakerData);
    return sneaker.data;
}

const sneakerService = {
    getSneakers,
    getSneaker,
    createsneake
}

export default sneakerService;