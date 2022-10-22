import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import News from "../News/News";
import Destination from "../Destination/Destination";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import LogIn from "../Auth/LogIn";
import Home from "../Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/news", element: <News></News> },
      { path: "/destination", element: <Destination></Destination> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/login", element: <LogIn></LogIn> },
    ],
  },
]);
