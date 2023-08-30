import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Basket from "./pages/Basket/Basket";
import Shop from "./pages/Shop/Shop";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE} from "./processes/consts"
import ItemPage from "./pages/ItemPage/ItemPage";
export const AuthRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
    },
]
    

export const PubRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REG_ROUTE,
        Component: Auth,
    },
    {
        path: ItemPage + '/:id',
        Component: ItemPage,    
    },
]