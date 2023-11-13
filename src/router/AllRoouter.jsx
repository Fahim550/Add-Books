import AddBook from "../fetaures/AddBook";
import ViewBook from "../fetaures/ViewBook";
import Error from "../pages/Error";
import Home from "../pages/Home";

export const allRouters=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/addbook",
        element:<AddBook/>
    },
    {
        path:"/viewbook",
        element:<ViewBook/>
    },
    {
        path:"*",
        element:<Error/>
    },
]