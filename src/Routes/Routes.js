import CardDetails from "../Component/CardDetails/CardDetails";
import Login from "../Component/Login/Login";
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
            path: '/course',
            element:<Courses></Courses>,
            loader: ()=> fetch('http://localhost:5000/course')
        },
        {
            path: '/course/:id',
            element:<CardDetails></CardDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
        },
        {
            path: '/premium/:id',
            element:<SafeCard></SafeCard>,
            loader: ({params})=> fetch(`http://localhost:5000/premium/${params.id}`)
        },
       
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Registation></Registation>
        },
       ]
    }
])
export default router;
