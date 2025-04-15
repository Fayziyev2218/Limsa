import Home from "../pages/home-pages";
import OurServices from "../pages/OurServices";
import OurWorks from "../pages/ourWorks";
import Prices from "../pages/prices";


export const route = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"ourworks",
        element:<OurWorks/>
    },
    {
        path:"/services",
        element:<OurServices/>
    },
    {
        path:"/prices",
        element:<Prices/>
    },
]