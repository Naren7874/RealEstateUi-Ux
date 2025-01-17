import "./navbar";
import "./pages/homepage/homepage"
import Homepage from "./pages/homepage/homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layout/layout";
import Listpage from "./pages/listPages/listpage";
import Singlepage from "./pages/singlePage/singlepage";
import Profile from "./pages/profile/profile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
         {
          path: "/",
          element: <Homepage />,
         },
         {
          path : "/list",
          element :<Listpage/>
         },
         {
          path : "/:id",
          element :<Singlepage/>
         },
         {
          path : "/profile",
          element :<Profile />
         }
      ]
    },
  ]);
  return (
   
      <RouterProvider router={router}/>
  )
}
export default App