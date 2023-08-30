import { getSneakers } from '@/store/sneakers/sneakers/sneakersslice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Sneakers = () => {
    const dispatch = useDispatch();
    const {sneakers, isLoading} = useSelector((state) => state.sneakers)

    useEffect(() => {
        dispatch(getSneakers());
      }, [dispatch]);
    return (
        <div>
            
        </div>
    );
};

export default Sneakers;