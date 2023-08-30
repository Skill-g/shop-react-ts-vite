import { SHOP_ROUTE } from '@/processes/consts';
import { AuthRoutes, PubRoutes, } from '@/routes';
import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
const router = () => {
    const isAuth = false;
    return (
        <Routes>
            {isAuth && AuthRoutes.map(({path , Component}) =>
            <Route key={path} path={path} element={<Component/>} />
            )}
            {PubRoutes.map(({path , Component}) =>
            <Route key={path} path={path} element={<Component/>} />
            )}
            <Route path="*" element={ <Navigate to={SHOP_ROUTE} replace />} />
        </Routes>
    );
};

export default router;