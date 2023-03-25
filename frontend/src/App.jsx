import { Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Login from "./components/Login/LoginForm";
import Register from "./components/Register/RegisterForm";
import Posts from "./pages/posts/Posts";
import Home from "./pages/home/Home";
import Footer from "../src/components/Footer/Footer";
import Test from "./pages/test/Test";



// creao rutas de navegacón que recive array de objetos
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />
//   }
// ]);

function App() {
  //  return <RouterProvider router={router} />;
   return (
     <div className="App bg-gradient-to-r from-yellow-100 via-white to-teal-200">
  
      <Provider store={store}>
     
         <Navbar />
      
        {/* <Register />
       <Posts/> */}
         <Routes>
         <Route path="/Login" element={<Login/>} />
            <Route path="/home" element={<Home />} />
           <Route path="/" element={<Register />} />

           <Route path="/posts" element={<Posts />} /> 
           {/* <Route path="/*" element={<h2>NOT FOUND</h2>} /> */}

           <Route path="/*" element={<h2>NOT FOUND</h2>} />
           <Route path="/Test" element={<Test />} />

         </Routes>
        
       <Footer />
      
     
       </Provider>
    </div>
);
}

export default App;
