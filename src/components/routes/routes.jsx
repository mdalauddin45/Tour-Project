import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Destination from "./components/Destination/Destination";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import LogIn from "./components/Auth/LogIn";

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
