import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";

//Routing ke liye ye wala section bnaya gya hai, bs tin chij use hua hai idhar app, home & bag
//isliye in tino ko routes folder bna ke rakh diye usme

const router = createBrowserRouter([
  {
    path: "/",                                          //slash path pe app dikhe
    element: <App />,
    children: [                                        //slash path pe app + home dikhe
      { path: "/", element: <Home /> },
      {
        path: "/bag",                                  //bag path pe app + bag dikhe
        element: <Bag />,
      },
    ],
  },
]);


//Redux store use kiye hain isliye provider me wrap kiye hain

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>         
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>  // Provide & Router dono redux store ke liye hai
);
