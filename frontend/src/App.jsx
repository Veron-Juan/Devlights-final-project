import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./pages/register/Register";
import Posts from "./pages/posts/Posts";
import Home from "./pages/home/Home";

import Footer from "../src/components/Footer/Footer";

import Test from "./pages/test/Test";

import { Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { PostForm } from "./components/Post/PostForm";

function App() {
  return (
    <div className="App bg-gradient-to-r from-yellow-100 via-white to-teal-200">
  
      <Provider store={store}>
     
        <Navbar />
      
        {/* <Register />
      <Posts/> */}
        <Routes>
        <Route path="/login" element={<Login />} />
           <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/*" element={<h2>NOT FOUND</h2>} />
          <Route path="/Test" element={<Test />} />

        </Routes>
        
      <Footer />
      
     
      </Provider>
    </div>
  );
}

export default App;
