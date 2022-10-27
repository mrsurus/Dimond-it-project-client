import Blog from "../Component/Blog/Blog";
import CardDetails from "../Component/CardDetails/CardDetails";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import NotFound from "../Component/NotFound/NotFound";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import Registation from "../Component/Registation/Registation";
import SafeCard from "../Component/SafeCard/SafeCard";

const { createBrowserRouter } = require("react-router-dom");
const { default: Courses } = require("../Component/Courses/Courses");
const { default: Main } = require("../Layout/Main");

const  router = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/course',
            element:<Courses></Courses>,
            loader: ()=> fetch('https://daimond-it-assignment-server.vercel.app/course')
        },
        {
            path: '/course/:id',
            element:<CardDetails></CardDetails>,
            loader: ({params})=> fetch(`https://daimond-it-assignment-server.vercel.app/course/${params.id}`)
        },
        {
            path: '/premium/:id',
            element:<PrivateRoute><SafeCard></SafeCard></PrivateRoute>,
            loader: ({params})=> fetch(`https://daimond-it-assignment-server.vercel.app/premium/${params.id}`)
        },
       
        {
            path: '/blog',
            element:<Blog></Blog>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Registation></Registation>
        },
        {
            path: '/*',
            element:<NotFound></NotFound>
        },
       ]
    }
])
export default router;
